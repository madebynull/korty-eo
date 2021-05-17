<template>
  <LocomotiveScroll
    ref="scroller"
    :getted-options="{
      smooth: true,
      direction: 'vertical',
      smartphone: {
        smooth: true
      },
      tablet: {
        smooth: true
      }
      // Other options
    }"
  >
    <div class="c-profile">
      <div class="c-profile__header">
        <nuxt-link to="/">
          <AnimatedLink class="c-bezier">
            Close
          </AnimatedLink>
        </nuxt-link>
        <nuxt-link to="/archive">
          <AnimatedLink class="c-bezier">
            Archive
          </AnimatedLink>
        </nuxt-link>
      </div>

      <div class="c-profile__hero">
        <div class="hero__image">
          <img
            src="https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1620936288/Korty/image_5_pgl6zc.jpg"
            alt=""
            data-scroll-speed="1"
          />
        </div>
        <div class="hero-content">
          <h1 class="hero-content__title">
            K<span class="fraunces">o</span>rty e<span class="fraunces"
              >o.</span
            >
          </h1>
          <div class="hero-content__caption">
            <p>Korty EO.</p>
            <p>January 23, 2021</p>
            <p>by @jag_ubani</p>
          </div>
        </div>
      </div>

      <div class="c-profile__headline">
        <h2 class="headline__text">
          <span>Eniola <span class="fraunces">Korty</span> Olanrewaju</span>
          <span>Eniola <span class="fraunces">Korty</span> Olanrewaju</span>
          <span>Eniola <span class="fraunces">Korty</span> Olanrewaju</span>
        </h2>
      </div>
      <div class="c-profile__intro">
        <div class="intro__image">
          <img
            src="https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621171243/Korty/Rectangle_15_anvqaw.jpg"
            alt=""
          />
          <p class="c-caption">
            Korty EO. &nbsp; <span>December 19, 2020</span>
          </p>
        </div>
        <div class="intro__text">
          <div class="inner">
            <h2>is a Lagos based freelance filmmaker & youtuber</h2>
            <p class="para-1">
              —in love with music and stories. On her youtube channel; she makes
              interviews, vlogs, and other experimental videos. She has
              previously worked at some of the best content studios in West
              Africa.
            </p>
            <p>
              Eniola Korty, you may know her online as Korty Eo, leaves no room
              for error when it comes to creating. Korty has an impressive
              resume, as she credits being a graphic designer, model, artist,
              filmmaker, and now YouTuber. Her honest and frank storytelling,
              combined with her engaging and beautiful B-roll shots of her
              hometown, make for an engaging and captivating channel.
            </p>
          </div>
        </div>
      </div>
      <div class="c-profile__editorial">
        <div class="editorial__image">
          <p class="c-caption">
            Korty EO. & TG OMORI &nbsp; <span>April 10, 2021</span>
          </p>
        </div>
        <div class="editorial__"></div>
      </div>
      <div class="c-profile__"></div>
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
    this.marqueeAnimation();
    this.heroImageAnimation();
    // const locomotive = this.$refs.scroller.locomotive;
    // locomotive.on("scroll", e => {
    //   console.log(e);
    // });
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

    marqueeAnimation() {
      gsap.to(".headline__text", {
        scrollTrigger: {
          trigger: ".c-profile__headline",
          scroller: this.$refs.scroller.locomotive.el,
          scrub: true,
          start: "top 95%",
          end: "bottom 10%"
        },
        xPercent: -50
        // ease: "none"
      });
    },
    heroImageAnimation() {
      gsap.to(".hero__image img", {
        scrollTrigger: {
          trigger: ".c-profile__headline",
          scroller: this.$refs.scroller.locomotive.el,
          scrub: true,
          start: "top bottom",
          end: "bottom center"
        },
        scale: 1.17
        // ease: "none"
      });
      gsap.to(".hero__image", {
        scrollTrigger: {
          trigger: ".c-profile__headline",
          scroller: this.$refs.scroller.locomotive.el,
          scrub: true,
          start: "top bottom",
          end: "bottom center"
        },
        y: 20
        // ease: "none"
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
