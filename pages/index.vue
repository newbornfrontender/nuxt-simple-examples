<template>
  <section>
    <h1>{{ title }}</h1>

    <div>
      <p>{{ counter }}</p>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'page-index',

    data: () => ({
      title: 'Главная',
    }),

    computed: {
      counter () {
        return this.$store.state.counter;
      },
    },

    head () {
      return {
        title: this.title,
        meta: [{
          hid: 'index-description',
          name: 'description',
          content: 'Описание главной страницы',
        }],
      };
    },
  };
</script>
