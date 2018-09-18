<template>
  <nav>
    <items-list v-bind:list="list" />
  </nav>
</template>

<script>
  import ItemsList from '~/components/items-list';

  export default {
    name: 'component-nav-list',

    data: () => ({
      list: [{
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
