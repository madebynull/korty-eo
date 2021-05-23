<template>
  <div class="c-svgs">
    <div class="svg-1">
      <svg viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M32.844 21.9998L22.116 11.2718L24.944 8.44385L40.5 23.9998L24.944 39.5558L22.116 36.7278L32.844 25.9998H8.5V21.9998H32.844Z"
          fill="#121821"
        />
      </svg>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 500 500"
      class="svg-2"
    >
      <defs>
        <path
          d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
          id="textcircle"
        >
          <!-- <animateTransform
            attributeName="transform"
            begin="0s"
            dur="30s"
            type="rotate"
            from="0 250 250"
            to="360 250 250"
            repeatCount="indefinite"
          /> -->
        </path>
      </defs>
      <text dy="70" textLength="1220">
        <textPath xlink:href="#textcircle">
          <slot />
          •
          <slot />
          •
        </textPath>
      </text>
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.c-svgs {
  position: relative;
}
.svg-1 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 40px;

  svg {
    width: 100px;
    max-width: 40px;
  }
}

@media (min-width: 769px) {
  .svg-2 {
    &:hover {
      animation-play-state: paused;
    }
  }
}

.svg-2 {
  width: 100%;
  animation: rotate 30s linear infinite;
  transform-origin: center;
  textPath {
    font-size: 24px;
    font-family: "Grotesk";
    text-transform: uppercase;
    letter-spacing: 15.5px;
    fill: #000000;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
