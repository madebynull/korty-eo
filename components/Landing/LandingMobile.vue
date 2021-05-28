<template>
  <LocomotiveScroll
    ref="scroller"
    :getted-options="{
      offset: ['30%', 0],
      smooth: true,
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
    <div class="c-landing__mobile">
      <div class="c-intro">
        <div class="c-intro__image c-name__image ov-h">
          <img
            src="https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1620697813/Korty/image_20_bufuoi.jpg"
            alt=""
            class="inner"
          />
        </div>

        <div class="c-intro__details">
          <h1 class="details-title span-overflow" style="margin-bottom: 12px;">
            <span class="ov-inner">
              korty_eo
            </span>
          </h1>
          <p class="details-jd span-overflow">
            <span class="ov-inner">
              FILMAKER & <br />
              YOUTUBER
            </span>
          </p>
        </div>
      </div>
      <div class="c-jobs">
        <div class="c-desc">
          <p class="span-overflow">
            <span class="ov-inner">
              Based in Lagos, Nigeria. Korty runs a youtube channel where she
              posts -
            </span>
          </p>
        </div>

        <div class="c-job">
          <h2 class="c-job__title align-right ml-auto">
            <a href="https://www.youtube.com/results?search_query=korty+eo">
              <span
                >VL<span class="fraunces">O</span>GS
                <span class="fraunces">+</span></span
              >
            </a>
            <br />
            INTERVIEWS
          </h2>
          <div class="c-job__video">
            <video
              src="https://res.cloudinary.com/dmwfd0zhh/video/upload/q_auto,f_auto/v1620859386/Korty/YT_n9yqbh.mp4"
              class="hover-reveal__video mobile"
              autoplay
              preload="auto"
              muted
              loop
              playsinline
            />
          </div>
        </div>

        <div class="c-job">
          <div class="c-job__title max">
            <a href="https://www.instagram.com/korty_eo/">
              <span>VIDE<span class="fraunces">O</span> </span>
              <br />
              <span class="align-right bottom-text">
                <div>MASHUPS</div>
                <div class="title-desc ml-auto">
                  <p>
                    these mostly go on instagram to her 23k plus audience. 🔥
                    edits, we highly recommend.
                  </p>
                </div>
              </span>
            </a>
          </div>
          <div class="c-job__video">
            <video
              src="https://res.cloudinary.com/dmwfd0zhh/video/upload/q_auto,f_auto/v1622155232/Korty/IG_rwtt50.mp4"
              class="hover-reveal__video mobile"
              autoplay
              preload="auto"
              muted
              loop
              playsinline
            />
          </div>
        </div>

        <div class="c-job">
          <h2 class="c-job__title align-right">
            <a href="https://www.instagram.com/korty_eo/">
              <span>M<span class="fraunces">O</span>DELLING</span>
            </a>
          </h2>
          <div class="c-job__desc">
            <div class="desc-image">
              <img
                src="https://res.cloudinary.com/dmwfd0zhh/image/upload/v1620911437/Korty/Rectangle_11_n0ujrc.jpg"
                alt=""
              />
            </div>
            <div class="desc-text">
              <p>
                She has walked for top fashion houses accross West Africa
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <nuxt-link class="c-circular-link" to="/profile">
          <circular-link label="profile-1">
            View Korty's Profile
          </circular-link>
        </nuxt-link>
      </div>
      <div class="c-credits">
        <button class="credits-link" @click="openModal">
          <div class="c-inner">
            credits
          </div>
        </button>
      </div>
    </div>
  </LocomotiveScroll>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedLink from "../AnimatedLink/AnimatedLink.vue";
import CircularLink from "../CircularLink/CircularLink.vue";

gsap.registerPlugin(ScrollTrigger, CircularLink);

export default {
  components: { AnimatedLink },
  mounted() {
    this.initScrolltrigger();
    // const elements = document.querySelectorAll(".scroll-in");
    // elements.forEach(element => this.elementAnimation(element));
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

    openModal() {
      this.$store.commit("updateModal", true);
    }
  }
};
</script>

<style lang="scss" scoped></style>
