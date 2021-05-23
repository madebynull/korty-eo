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
      <div style="margin: 20px;">
        <animated-arrow href="/" />
      </div>
    </div>
  </LocomotiveScroll>
</template>

<script>
import AnimatedArrow from "../components/AnimatedArrow.vue";
export default {
  components: { AnimatedArrow }
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

.scroll-in {
  height: 80vh;
}
</style>
