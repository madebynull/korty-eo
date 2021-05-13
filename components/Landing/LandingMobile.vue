<template>
  <LocomotiveScroll
    ref="scroller"
    :getted-options="{
      offset: ['30%', 0],
      direction: 'vertical'
      // Other options
    }"
    class="mobile-landing"
  >
    <div class="c-landing__header">
      <nuxt-link to="/profile">
        Profile
      </nuxt-link>
      <nuxt-link to="/archive">
        Archive
      </nuxt-link>
    </div>
    <div class="c-landing__mobile"></div>
  </LocomotiveScroll>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedLink from "../AnimatedLink/AnimatedLink.vue";
gsap.registerPlugin(ScrollTrigger);

export default {
  components: { AnimatedLink },
  mounted() {
    this.initScrolltrigger();
    const elements = document.querySelectorAll(".scroll-in");
    elements.forEach(element => this.elementAnimation(element));
  },
  methods: {
    initScrolltrigger() {
      const locomotive = this.$refs.scroller.locomotive;
      locomotive.on("scroll", ScrollTrigger.update);
      ScrollTrigger.scrollerProxy(locomotive.el, {
        scrollTop(value) {
          return arguments.length
            ? locomotive.scrollTo(value, 0, 0)
            : locomotive.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          };
        }
      });
    },

    elementAnimation(element) {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          scroller: this.$refs.scroller.locomotive.el,
          scrub: true,
          start: "top bottom",
          end: "bottom center"
        },
        y: 40,
        ease: "none"
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
