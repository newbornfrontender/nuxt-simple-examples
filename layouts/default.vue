<template>
  <section>
    <main-page-header />

    <main-page-content />

    <main-page-footer />
  </section>
</template>

<script>
  export default {
    name: 'layout-default',

    components: {
      'main-page-header': () => import('~/components/main-page-header'),
      'main-page-content': () => import('~/components/main-page-content'),
      'main-page-footer': () => import('~/components/main-page-footer'),
    },
  };
</script>
