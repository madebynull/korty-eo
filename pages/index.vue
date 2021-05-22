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
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1620697813/Korty/image_20_bufuoi.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1620865175/Korty/Rectangle_11_tuj1nt.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621239276/Korty/image_33_1_pmbu2v.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621285427/Korty/Rectangle_17_ve1u5y.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621690413/Korty/korty-work_ukm6yk.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621406261/Korty/Rectangle_19_o44i0q.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621406261/Korty/Rectangle_20_hkfszk.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621406260/Korty/Rectangle_21_itahct.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621443387/Korty/Rectangle_22_zkazsw.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621466610/Korty/image_rnnzho.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621524451/Korty/kortybbn1_v31czm.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621524466/Korty/kortybbn2_dixrhc.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621540680/Korty/image_43_u9fsmz.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621541975/Korty/korty-pamane_glwvwh.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621542856/Korty/153576857_480678352950294_7236937184248464472_n_3_ktb05h.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621568117/Korty/Rectangle_23_dxgpdz.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621637709/Korty/korty-archive-1_kjvsf4.jpg"
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
