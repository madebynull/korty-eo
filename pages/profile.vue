<template>
  <LocomotiveScroll
    ref="scroller"
    :getted-options="{
      offset: ['30%', 0],
      smooth: true,
      direction: 'vertical'
      // Other options
    }"
  >
    <div class="c-profile">
      <div class="c-profile__header">
        <nuxt-link to="/profile">
          <AnimatedLink class="c-bezier">
            Profile
          </AnimatedLink>
        </nuxt-link>
        <nuxt-link to="/archive">
          <AnimatedLink class="c-bezier">
            Archive
          </AnimatedLink>
        </nuxt-link>
      </div>
    </div>
  </LocomotiveScroll>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedLink from "../components/AnimatedLink/AnimatedLink.vue";
gsap.registerPlugin(ScrollTrigger);

export default {
  components: { AnimatedLink },
  mounted() {
    this.initScrolltrigger();
    const elements = gsap.utils.toArray(".scroll-in");
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
