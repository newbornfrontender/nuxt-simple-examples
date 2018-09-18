<template>
  <section>
    <h1>{{ title }}</h1>
  </section>
</template>

<script>
  export default {
    name: 'page-index',

    data: () => ({
      title: 'Главная',
    }),

    head () {
      return {
        title: 'Главная',
        meta: [{
          hid: 'index-description',
          name: 'description',
          content: 'Описание главной страницы',
        }],
      };
    },
  };
</script>
