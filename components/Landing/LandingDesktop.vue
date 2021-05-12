<template>
  <div class="c-landing__desktop">
    <div class="hero-content">
      <div class="hero-image">
        <div class="image-mask"></div>
        <div class="c-image"></div>
      </div>
    </div>
    <div class="hero-links">
      <div class="c-hoverlink hover-link-1">
        <hover-link
          label="VLOGS + INTERVIEWS"
          assetUrl="https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1620697813/Korty/image_2_gijibv.jpg"
          href="/"
        />
      </div>

      <div class="c-hoverlink hover-link-2">
        <hover-link
          label="VLOGS + INTERVIEWS"
          assetUrl="https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1620697813/Korty/image_2_gijibv.jpg"
          href="/"
        />
      </div>
      <nuxt-link class="c-circular-link" to="/profile">
        <circular-link>
          View Profile
        </circular-link>
      </nuxt-link>
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
