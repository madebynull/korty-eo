<template>
  <LocomotiveScroll
    ref="scroller"
    :getted-options="{
      direction: 'horizontal'
      // Other options
    }"
  >
    <div class="tall">
      <h1>Korty</h1>
      <p>Website coming up</p>
      <nuxt-link to="/about">about</nuxt-link>
    </div>
  </LocomotiveScroll>
</template>

<script>
import LocomotiveScroll from "~/components/LocomotiveScroll";
export default {
  components: { LocomotiveScroll }
};
</script>

<style lang="scss" scoped>
h1 {
  font-family: "Fraunces", sans-serif;
}

.tall {
  width: 300vh;
  height: 100vh;
  overflow: hidden;
  display: flex;
}
</style>
