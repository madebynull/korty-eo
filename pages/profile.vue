<template>
  <LocomotiveScroll
    ref="scroller"
    :getted-options="{
      offset: ['30%', 0],
      direction: 'vertical'
      // Other options
    }"
  >
    <div class="tall">
      <h1>Korty</h1>
      <p>Website coming up</p>
      <nuxt-link to="/archive">archive</nuxt-link>
    </div>

    <div class="scroll-in">
      Scroll In
    </div>
    <div class="scroll-in">
      Scroll In
    </div>
    <div class="scroll-in">
      Scroll In
    </div>
  </LocomotiveScroll>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
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

<style lang="scss" scoped>
h1 {
  font-family: "Fraunces", sans-serif;
}

.tall {
  height: 300vh;
}

.scroll-in {
  height: 80vh;
  font-size: 40px;
}
</style>
