<template>
  <LocomotiveScroll
    ref="scroller"
    :getted-options="{
      offset: ['30%', 0],
      direction: 'vertical'
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

<script></script>

<style lang="scss" scoped>
h1 {
  font-family: "Fraunces", sans-serif;
}

.tall {
  height: 300vh;
}
</style>
