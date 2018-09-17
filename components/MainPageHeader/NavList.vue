<template>
  <nav>
    <items-list v-bind:items-list="navList" />
  </nav>
</template>

<script>
  import ItemsList from '~/components/ItemsList';

  export default {
    data: () => ({
      navList: [{
        title: 'Главная',
        path: '/',
      }, {
        title: 'Счетчик',
        path: '/counter',
      }],
    }),

    components: {
      ItemsList,
    },
  };
</script>
