<template>
  <div class="c-app">
    <Nuxt v-if="imagesLoaded" />
    <transition @leave="leave" :css="false">
      <preloader v-if="!imagesLoaded" />
    </transition>
    <modal />
  </div>
</template>

<script>
import gsap from "gsap/all";
import { mapState } from "vuex";
import Modal from "../components/Modal/Modal.vue";
import Preloader from "../components/Preloader.vue";
export default {
  components: { Modal, Preloader },
  computed: {
    ...mapState(["modalOpen", "imagesLoaded"])
  },
  methods: {
    leave(el, done) {
      console.log("opacity");
      const timeline = gsap.timeline({
        onComplete: done
      });
      timeline.to(el, {
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });
    }
  }

  // this.$store.commit("updateModal", true);
};
</script>

<style scoped>
.c-app {
  max-width: 1650px;
  margin: 0 auto;
}
</style>
