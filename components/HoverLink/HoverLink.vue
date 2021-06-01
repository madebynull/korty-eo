<template>
  <a :href="href" target="_blank" ref="hoverLink" class="menu__item">
    <span class="menu__item-label">
      <slot />
    </span>
    <div class="hover-reveal">
      <div class="hover-reveal__inner">
        <video
          :src="assetUrl"
          class="hover-reveal__video"
          autoplay
          preload="auto"
          muted
          loop
          playsinline
        />
      </div>
    </div>
  </a>
</template>

<script>
import HoverVideo from "~/animations/hoverVideo";
export default {
  props: {
    label: String,
    assetUrl: String,
    href: String,
    index: String
  },

  mounted() {
    const hoverRef = this.$refs.hoverLink;
    new HoverVideo(hoverRef);
  }
};
</script>

<style scoped></style>
