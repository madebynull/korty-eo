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
a,
button {
  display: inline-block;
  &:hover {
    .c-link__inner {
      transform: translateY(-100%);
    }
  }
}

.c-bezier {
  .c-link__inner {
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
}
.c-link {
  display: inline-flex;
  align-items: center;
  position: relative;
  z-index: -1;
  overflow-y: hidden;

  &__inner {
    display: flex;
    transform: translateY(0);
    transition: transform 0.3s ease-out;

    > span {
      /* display: flex; */
      /* white-space: nowrap; */
    }
  }

  &__animated {
    /* white-space: nowrap; */
    position: absolute;
    top: 100%;
  }
}
</style>
