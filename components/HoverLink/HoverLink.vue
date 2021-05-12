<template>
  <!-- <div> -->
  <a :href="href" ref="hoverLink" class="menu__item">
    <span class="menu__item-label">
      <slot />
    </span>
  </a>
  <!-- </div> -->
</template>

<script>
import Menu from "~/animations/menuHover";
export default {
  props: {
    label: String,
    assetUrl: String,
    href: String
  },

  mounted() {
    const hoverRef = this.$refs.hoverLink;
    // console.log(this.$props);
    // new Menu(hoverRef);
  }
};
</script>

<style scoped></style>
