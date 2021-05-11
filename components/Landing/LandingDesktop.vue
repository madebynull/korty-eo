<template>
  <div class="c-landing__desktop">
    <div class="hero-content">
      <div class="hero-image">
        <div class="image-mask"></div>
        <div class="c-image"></div>
      </div>
    </div>
    <div class="hero-links">
      <nuxt-link to="/profile">
        <circular-link>
          Profile
        </circular-link>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import CircularLink from "../CircularLink/CircularLink.vue";
export default {
  components: { CircularLink }
};
</script>

<style lang="scss" scoped></style>
