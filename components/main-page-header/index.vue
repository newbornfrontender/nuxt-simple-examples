<template>
  <header>
    <nav-list />
  </header>
</template>

<script>
  export default {
    name: 'component-main-page-header',

    components: {
      'nav-list': () => import('~/components/nav-list'),
    },
  };
</script>
