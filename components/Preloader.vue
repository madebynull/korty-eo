<template>
  <div class="c-preloader" ref="preloader">
    <div class="c-preloader__inner">
      <button @click="closeLoader">Close</button>
      <h1 class="fraunces">
        <span class="percentages">
          <div class="fake-zero">0</div>
          <span class="p-inner">
            <span class="hide-first">000</span>
            <span
              v-for="(percentage, index) in numbersArr"
              :class="
                `subsequent ${
                  index + 1 < numbersArr.length ? 'hide-first' : ''
                }`
              "
              :key="index"
              :style="`top: ${(index + 1) * 100}%`"
            >
              {{ percentage }}
            </span>
          </span>
        </span>
      </h1>
    </div>
  </div>
</template>

<script>
import gsap from "gsap/all";
import { preloadImage } from "~/utils/index.js";
export default {
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
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621637709/Korty/korty-archive-1_kjvsf4.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921592/Korty/Rectangle_34_faqgls.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921685/Korty/Rectangle_34-1_firxdx.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921602/Korty/Rectangle_36_lj8azl.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921624/Korty/Rectangle_37_er4jkv.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921596/Korty/Rectangle_38_qtfbi4.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921620/Korty/Rectangle_39_bewtbe.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921686/Korty/Rectangle_40_ear7xg.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921677/Korty/Rectangle_42_md72qx.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921618/Korty/Rectangle_43_xhdyyi.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921643/Korty/Rectangle_44_crnxqk.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921622/Korty/Rectangle_41_czd9h1.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921687/Korty/Rectangle_45_omfqqx.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921750/Korty/Rectangle_46_hwl8fv.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921644/Korty/Rectangle_47_nesabh.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921680/Korty/Rectangle_48_ybbj09.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921727/Korty/Rectangle_56_k6qgpk.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921640/Korty/Rectangle_49_taxh6a.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921695/Korty/Rectangle_50_m3cic3.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921794/Korty/Rectangle_51_mj4vqi.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921702/Korty/Rectangle_52_r0cnkm.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921704/Korty/Rectangle_53_k2chip.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921770/Korty/Rectangle_54_r0rsvh.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921773/Korty/Rectangle_57_twgrjb.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921708/Korty/Rectangle_55_eequ72.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921722/Korty/Rectangle_58_kiisqn.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921759/Korty/Rectangle_59_tjr5nx.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921782/Korty/Rectangle_60_bwxjnj.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921812/Korty/Rectangle_61_hgeq0v.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921816/Korty/Rectangle_62_zkkzof.jpg",
        "https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921814/Korty/Rectangle_64_v1mfrj.jpg"
      ],
      percentageLoaded: 0,
      isLoaded: false,
      numbersArr: []
    };
  },
  mounted() {
    const preloader = this.$refs.preloader;
    this.preload();

    preloader.style.height = `${window.innerHeight}px`;

    window.addEventListener("resize", () => {
      preloader.style.height = `${window.innerHeight}px`;
    });
  },
  watch: {
    percentageLoaded(newValue, oldValue) {
      // console.log(newValue, oldValue);
    }
  },
  methods: {
    async preload() {
      const totalImages = this.toBePreloaded.length;
      let loadedCount = 0;

      const min3Digits = num => {
        if (num < 10) {
          return `00${num}`;
        } else if (num < 99) {
          return `0${num}`;
        }
        return `${num}`;
      };

      this.toBePreloaded.forEach((image, index) => {
        const percentage = Math.floor((100 / totalImages) * (index + 1));
        this.numbersArr = [...this.numbersArr, min3Digits(percentage)];
      });

      await Promise.all(
        this.toBePreloaded.map(async image => {
          await preloadImage(image);
          loadedCount++;
          const percentage = Math.floor((100 / totalImages) * loadedCount);
          this.percentageLoaded = percentage;
          gsap.to(".p-inner", {
            yPercent: -(loadedCount * 100),
            duration: totalImages / 5,
            onComplete: () => {
              if (percentage !== 100) return;
              // this.$store.commit("updateImagesLoaded", true);
            }
          });

          gsap.set(".fake-zero", {
            background: "transparent",
            delay: totalImages / 5 - 0.8
          });

          gsap.to(".fake-zero", {
            yPercent: -100,
            duration: 1,
            delay: totalImages / 5 - 0.5
          });
        })
      );
    },
    closeLoader() {
      this.$store.commit("updateImagesLoaded", true);
    }
  }
};
</script>

<style lang="scss" scoped></style>
