<template>
  <section>
    <h1>{{ title }}</h1>
  </section>
</template>

<script>
  export default {
    name: 'page-counter',

    data: () => ({
      title: 'Счетчик',
    }),

    head () {
      return {
        title: 'Счетчик',
        meta: [{
          hid: 'counter-description',
          name: 'description',
          content: 'Описание страницы счетчика',
        }],
      };
    },
  };
</script>
