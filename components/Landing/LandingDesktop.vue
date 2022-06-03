<template>
  <div class="desktop-landing">
    <div class="c-landing__header">
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
    <div class="c-landing__desktop">
      <div class="hero-content">
        <div class="hero-image">
          <div class="image-mask"></div>
          <div class="c-image"></div>
        </div>
        <div class="c-name__image">
          <div class="inner" />
        </div>
        <div class="c-name__details">
          <h1 class="details-title span-overflow">
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

        <button class="credits-link" @click="openModal">
          <div class="c-inner">
            <AnimatedLink class="c-bezier">
              credits
            </AnimatedLink>
          </div>
        </button>
      </div>
      <div class="hero-links">
        <div class="c-hoverlink hover-link-1">
          <div class="span-overflow">
            <div class="ov-inner">
              <p>
                Based in Lagos, Nigeria. Korty runs a youtube channel where she
                posts -
              </p>
            </div>
          </div>
          <div>
            <hover-link
              label="VLOGS + INTERVIEWS"
              assetUrl="https://res.cloudinary.com/dmwfd0zhh/video/upload/q_auto,f_auto/v1620859386/Korty/YT_n9yqbh.mp4"
              href="https://www.youtube.com/channel/UCTFFhYhkLkxjhcCdwUKmQ5g"
            >
              <sup class="c-hoverlink__super">01</sup>
              <div class="link-overflow">
                <span class="ov-inner">
                  <AnimatedLink>
                    VL<span class="fraunces">O</span>GS
                    <span class="fraunces">+</span> INTERVIEWS
                  </AnimatedLink>
                </span>
              </div>
            </hover-link>
          </div>
        </div>

        <div class="c-hoverlink hover-link-2">
          <div>
            <hover-link
              label="Video Mashups"
              assetUrl="https://res.cloudinary.com/dmwfd0zhh/video/upload/q_auto,f_auto/v1622155232/Korty/IG_rwtt50.mp4"
              href="https://www.instagram.com/korty_eo/"
            >
              <sup class="c-hoverlink__super">02</sup>
              <div class="link-overflow">
                <span class="ov-inner">
                  <AnimatedLink>
                    VIDE<span class="fraunces">O</span> MASHUPS
                  </AnimatedLink>
                </span>
              </div>
            </hover-link>
          </div>
          <div class="span-overflow">
            <span class="ov-inner">
              <p>
                these mostly go on instagram to her 23k plus audience. 🔥 edits,
                we highly recommend.
              </p>
            </span>
          </div>
        </div>
        <div class="c-hoverlink hover-link-3">
          <div class="image-details">
            <div class="span-overflow">
              <span class="ov-inner">
                <p>
                  She has walked for top fashion houses accross West Africa
                </p>
              </span>
            </div>
            <div class="c-image c-model__image ov-h">
              <img
                src="https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1620865175/Korty/Rectangle_11_tuj1nt.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <hover-link
              label="Modelling"
              assetUrl="https://res.cloudinary.com/dmwfd0zhh/video/upload/q_auto,f_auto/v1622155206/Korty/YT_model_wpxhbg.mp4"
              href="https://www.instagram.com/korty_eo/"
            >
              <sup class="c-hoverlink__super">03</sup>
              <div class="link-overflow">
                <span class="ov-inner">
                  <AnimatedLink>
                    M<span class="fraunces">O</span>DELLING
                  </AnimatedLink>
                </span>
              </div>
            </hover-link>
          </div>
        </div>
        <nuxt-link class="c-circular-link" to="/profile">
          <circular-link>
            View Korty's Profile
          </circular-link>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import CircularLink from "../CircularLink/CircularLink.vue";
import HoverLink from "../HoverLink/HoverLink.vue";
export default {
  components: { CircularLink, HoverLink },
  methods: {
    openModal() {
      this.$store.commit("updateModal", true);
    }
  }
};
</script>

<style lang="scss" scoped></style>
