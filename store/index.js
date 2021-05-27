export const state = () => ({
  modalOpen: false,
  imagesLoaded: false
});

export const mutations = {
  updateModal: (state, payload) => {
    state.modalOpen = payload;
  },
  updateImagesLoaded: (state, payload) => {
    state.imagesLoaded = payload;
  }
};
