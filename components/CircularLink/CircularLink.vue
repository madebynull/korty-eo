<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 500 500"
  >
    <defs>
      <path
        d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
        id="textcircle"
      >
        <animateTransform
          attributeName="transform"
          begin="0s"
          dur="30s"
          type="rotate"
          from="0 250 250"
          to="360 250 250"
          repeatCount="indefinite"
        />
      </path>
    </defs>
    <text dy="70" textLength="1220">
      <textPath xlink:href="#textcircle">
        <slot />
        <slot />
        <slot />
      </textPath>
    </text>
  </svg>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
svg {
  width: 100%;
}
svg textPath {
  font-size: 35px;
  font-family: "Fraunces";
  text-transform: uppercase;
  letter-spacing: 35px;
  fill: #000000;
}
</style>
