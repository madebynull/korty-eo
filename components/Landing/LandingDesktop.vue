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
          <h1 class="details-title">korty_eo</h1>
          <p class="details-jd">
            FILMAKER & <br />
            YOUTUBER
          </p>
        </div>

        <button class="credits-link">
          <div class="c-inner">
            <AnimatedLink class="c-bezier">
              credits
            </AnimatedLink>
          </div>
        </button>
      </div>
      <div class="hero-links">
        <div class="c-hoverlink hover-link-1">
          <p>
            Based in Lagos, Nigeria. Korty runs a youtube channel where she
            posts -
          </p>
          <div>
            <hover-link
              label="VLOGS + INTERVIEWS"
              assetUrl="https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1620697813/Korty/image_2_gijibv.jpg"
              href="/"
            >
              <sup class="c-hoverlink__super">01</sup>
              <AnimatedLink>
                VL<span class="fraunces">O</span>GS
                <span class="fraunces">+</span> INTERVIEWS
              </AnimatedLink>
            </hover-link>
          </div>
        </div>

        <div class="c-hoverlink hover-link-2">
          <div>
            <hover-link
              label="VLOGS + INTERVIEWS"
              assetUrl="https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1620697813/Korty/image_2_gijibv.jpg"
              href="/"
            >
              <sup class="c-hoverlink__super">02</sup>
              <AnimatedLink>
                VIDE<span class="fraunces">O</span> MASHUPS
              </AnimatedLink>
            </hover-link>
          </div>
          <p>
            these mostly go on instagram to her 23k plus audience. 🔥 edits, we
            highly recommend.
          </p>
        </div>
        <div class="c-hoverlink hover-link-3">
          <div class="image-details">
            <p>
              She has walked for top fashion houses accross West Africa
            </p>
            <div class="c-image">
              <img
                src="https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1620865175/Korty/Rectangle_11_tuj1nt.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <hover-link
              label="VLOGS + INTERVIEWS"
              assetUrl="https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1620697813/Korty/image_2_gijibv.jpg"
              href="/"
            >
              <sup class="c-hoverlink__super">03</sup>
              <AnimatedLink>
                M<span class="fraunces">O</span>DELLING
              </AnimatedLink>
            </hover-link>
          </div>
        </div>
        <nuxt-link class="c-circular-link" to="/profile">
          <circular-link>
            View Profile
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
  components: { CircularLink, HoverLink }
};
</script>

<style lang="scss" scoped></style>
