<template>
  <!-- <div> -->
  <a :href="href" ref="hoverLink" class="menu__item">
    <span class="menu__item-label">
      <slot />
    </span>
    <div class="hover-reveal">
      <div class="hover-reveal__inner">
        <video
          src="https://res.cloudinary.com/dmwfd0zhh/video/upload/q_auto,f_auto/v1620859386/Korty/YT_n9yqbh.mp4"
          class="hover-reveal__video"
          autoplay
          preload="auto"
          muted
          loop
        ></video>
      </div>
    </div>
  </a>
  <!-- </div> -->
</template>

<script>
import Menu from "~/animations/menuHover";
export default {
  props: {
    label: String,
    assetUrl: String,
    href: String,
    index: String
  },

  mounted() {
    const hoverRef = this.$refs.hoverLink;
    // console.log(this.$props);
    new Menu(hoverRef);
  }
};
</script>

<style scoped></style>
