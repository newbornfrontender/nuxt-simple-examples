export const state = () => ({
  counter: 0,
});

export const mutations = {
  increment (state) {
    state.counter++;
  },

  decrement (state) {
    if (state.counter > 0) {
      state.counter--;
    };
  },
};
