export const state = () => ({
  counter: 0,
});

export const mutations = {
  increment (state, num) {
    num = num || 1;

    state.counter += num;
  },

  decrement (state, num) {
    num = num || 1;

    if (state.counter > 0) {
      state.counter -= num;
    };
  },
};
