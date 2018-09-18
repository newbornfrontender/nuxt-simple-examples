<template>
  <header>
    <nav-list />
  </header>
</template>

<script>
  import NavList from './nav-list';

  export default {
    name: 'component-main-page-header',

    components: {
      NavList,
    },
  };
</script>
