<template>
  <nav>
    <items-list v-bind:list="list" />
  </nav>
</template>

<script>
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
      'items-list': () => import('~/components/items-list'),
    },
  };
</script>
