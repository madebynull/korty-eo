<template>
  <div class="c-app">
    <Nuxt />
    <modal />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Modal from "../components/Modal/Modal.vue";
export default {
  components: { Modal },
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
