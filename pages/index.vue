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
import { preloadImage } from "~/utils/index.js";
export default {
  components: { desktop, Mobile, AnimatedLink, CircularLink },

  mounted() {
    this.$nuxt.$emit("update-locomotive");
  },

  methods: {}
};
</script>

<style lang="scss" scoped></style>
