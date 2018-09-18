<template>
  <section>
    <main-page-header />

    <main-page-content />

    <main-page-footer />
  </section>
</template>

<script>
  import MainPageHeader from '~/components/main-page-header';
  import MainPageContent from '~/components/main-page-content';
  import MainPageFooter from '~/components/main-page-footer';

  export default {
    name: 'layout-default',

    components: {
      MainPageHeader,
      MainPageContent,
      MainPageFooter,
    },
  };
</script>
