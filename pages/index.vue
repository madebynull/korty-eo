<template>
  <div class="c-landing">
    <svg class="cursor" width="32" ref="cursor" height="32" viewBox="0 0 20 20">
      <circle class="cursor__inner" cx="10" cy="10" r="5" />
    </svg>
    <desktop />
    <mobile />
  </div>
</template>

<script>
import desktop from "~/components/Landing/LandingDesktop.vue";
import Mobile from "~/components/Landing/LandingMobile.vue";
import AnimatedLink from "~/components/AnimatedLink/AnimatedLink.vue";
import CircularLink from "~/components/CircularLink/CircularLink.vue";
import gsap from "gsap/all";
import { Cursor } from "~/animations/cursor";

export default {
  components: { desktop, Mobile, AnimatedLink, CircularLink },
  transition: {
    name: "homepage",
    mode: "out-in",
    css: false,
    appear: true,
    beforeEnter(el) {
      gsap.set(el, {
        opacity: 0
      });
    },
    enter(el, done) {
      const tl = gsap.timeline({
        onComplete: done
      });
      tl.to(el, {
        opacity: 1,
        duration: 1
      })
        .from(
          ".span-overflow .ov-inner",
          {
            yPercent: 100,
            duration: 0.8,
            ease: "power2.out",
            stagger: {
              amount: 0.08
            }
          },
          "-=.7"
        )
        .from(
          ".link-overflow .ov-inner",
          {
            yPercent: 100,
            duration: 0.8,
            ease: "power2.out",
            stagger: {
              amount: 0.08
            }
          },
          "-=.8"
        )
        .from(
          ".c-model__image img",
          {
            duration: 1,
            opacity: 0,
            scale: 1.5,
            ease: "power2.out"
          },
          "-=1"
        )
        .from(
          ".c-name__image .inner",
          {
            duration: 1,
            opacity: 0,
            scale: 1.5,
            ease: "power2.out"
          },
          "-=1"
        )
        .from(
          ".hero-image .c-image",
          {
            duration: 1,
            opacity: 0,
            scale: 1.5,
            ease: "power2.out"
          },
          "-=1"
        );
    },
    beforeLeave(el) {
      gsap.set(".c-exit", {
        zIndex: 30,
        top: "unset",
        bottom: 0
      });
      gsap.set(".exit-span", {
        opacity: 1
      });
    },
    leave(el, done) {
      const tl = gsap.timeline({
        onComplete: done
      });

      tl.to(".c-exit", {
        height: window.innerHeight,
        duration: 1.5,
        ease: "Expo.easeInOut"
      })
        .set(".c-exit", {
          top: 0,
          bottom: "unset"
        })
        .from(
          ".exit-span",
          {
            yPercent: 100,
            duration: 1,
            skewY: 10,
            stagger: {
              amount: 0.1
            },
            ease: "power2.out"
          },
          "-=.5"
        )
        .set(el, {
          opacity: 0
        })
        .to(".exit-span", {
          opacity: 0,
          duration: 1,
          ease: "power2.out"
        })
        .to(
          ".c-exit",
          {
            height: 0,
            duration: 1.5,
            ease: "Expo.easeInOut"
          },
          "-=1"
        );
    }
  },

  mounted() {
    this.beginCursor();
    this.$nuxt.$emit("update-locomotive");
  },

  methods: {
    beginCursor() {
      const cursorRef = this.$refs.cursor;
      const cursor = new Cursor(cursorRef);
      [...document.querySelectorAll("a")].forEach(link => {
        link.addEventListener("mouseenter", () => cursor.enter());
        link.addEventListener("mouseleave", () => cursor.leave());
      });

      [...document.querySelectorAll("button")].forEach(link => {
        link.addEventListener("mouseenter", () => cursor.enter());
        link.addEventListener("mouseleave", () => cursor.leave());
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
