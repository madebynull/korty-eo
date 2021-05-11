<template>
  <span class="c-link">
    <span class="c-link__inner">
      <span>
        <slot />
      </span>
      <span class="c-link__animated">
        <slot />
      </span>
    </span>
  </span>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
a {
  &:hover {
    .c-link__inner {
      transform: translateY(-100%);
    }
  }
}
.c-link {
  display: inline-flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  z-index: -1;

  &__inner {
    display: flex;
    transform: translateY(0);
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    > span {
      display: flex;
      white-space: nowrap;
    }
  }

  &__animated {
    white-space: nowrap;
    position: absolute;
    top: 100%;
  }
}
</style>
