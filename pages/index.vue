<template>
  <div class="c-landing">
    <desktop />
    <mobile />
  </div>
</template>

<script>
import desktop from "~/components/Landing/LandingDesktop.vue";
import Mobile from "~/components/Landing/LandingMobile.vue";
import AnimatedLink from "~/components/AnimatedLink/AnimatedLink.vue";
import CircularLink from "~/components/CircularLink/CircularLink.vue";
import { preloadImage } from "~/utils/index.js";
export default {
  components: { desktop, Mobile, AnimatedLink, CircularLink },
  data() {
    return {
      toBePreloaded: [
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621171243/Korty/Rectangle_15_anvqaw.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1620936288/Korty/image_5_pgl6zc.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1620697813/Korty/image_2_gijibv.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1620697813/Korty/image_20_bufuoi.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1620865175/Korty/Rectangle_11_tuj1nt.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621235815/Korty/image_33_foxwjy.jpg"
      ],
      percentageLoaded: 0,
      isLoaded: false
    };
  },
  mounted() {
    this.preload();
  },
  watch: {
    percentageLoaded(newValue, oldValue) {
      console.log(newValue, oldValue);
    }
  },
  methods: {
    async preload() {
      const totalImages = this.toBePreloaded.length;
      let loadedCount = 0;

      await Promise.all(
        this.toBePreloaded.map(async image => {
          await preloadImage(image);
          loadedCount++;
          const percentage = Math.floor((100 / totalImages) * loadedCount);
          this.percentageLoaded = percentage;
          // gsap.to("", {
          //   width: `${percentage}%`,
          //   duration: 1,
          //   onComplete: () => {
          //     if (percentage !== 100) return;
          //     this.isLoaded = true;
          //   }
          // });
        })
      );
    }
  }
};
</script>

<style lang="scss" scoped></style>
