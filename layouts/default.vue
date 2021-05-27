<template>
  <div class="c-app">
    <Nuxt v-if="imagesLoaded" />
    <proloader v-else />
    <modal />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Modal from "../components/Modal/Modal.vue";
import Proloader from "../components/Preloader.vue";
export default {
  components: { Modal, Proloader },
  computed: {
    ...mapState(["modalOpen", "imagesLoaded"])
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
