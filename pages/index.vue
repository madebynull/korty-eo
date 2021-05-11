<template>
  <div class="c-landing">
    <div class="c-landing__header">
      <nuxt-link to="/profile">
        <AnimatedLink>
          Profile
        </AnimatedLink>
      </nuxt-link>
      <nuxt-link to="/archive">
        <AnimatedLink>
          Archive
        </AnimatedLink>
      </nuxt-link>
    </div>

    <desktop />
    <mobile />
  </div>
</template>

<script>
import desktop from "~/components/Landing/LandingDesktop.vue";
import Mobile from "~/components/Landing/LandingMobile.vue";
import AnimatedLink from "~/components/AnimatedLink/index.vue";
export default {
  components: { desktop, Mobile, AnimatedLink }
};
</script>

<style lang="scss" scoped></style>
