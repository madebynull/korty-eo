<template>
  <div class="c-landing">
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
export default {
  components: { desktop, Mobile, AnimatedLink, CircularLink },
  transition: {
    name: "homepage",
    mode: "out-in",
    css: false,
    appear: true,
    beforeEnter(el) {
      console.log(el);
      gsap.set(el, {
        opacity: 0
      });
      console.log("before enter");
    },
    enter(el, done) {
      console.log("entering");
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
            skewY: 20,
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
          "-=.5"
        );
    }
  },

  mounted() {
    this.$nuxt.$emit("update-locomotive");
  },

  methods: {}
};
</script>

<style lang="scss" scoped></style>
