<template>
  <div>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
  export default {
    data: () => ({
      msg: 'Hello world!',
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
