<template>
  <section>
    <h1>{{ title }}</h1>

    <div>
      <p>Счетчик: {{ counter }}</p>

      <button v-on:click="increment">+</button>
      <button v-on:click="decrement">-</button>
    </div>
  </section>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';

  export default {
    name: 'page-counter',

    data: () => ({
      title: 'Счетчик',
    }),

    methods: {
      ...mapMutations([
        'counter/increment',
      ]),
      decrement () {
        this.$store.commit('counter/decrement', 3);
      },
    },

    computed: mapState({
      counter: state => state.counter.counter,
    }),

    head () {
      return {
        title: this.title,
        meta: [{
          hid: 'counter-description',
          name: 'description',
          content: 'Описание страницы счетчика',
        }],
      };
    },
  };
</script>
