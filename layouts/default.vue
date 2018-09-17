<template>
  <section>
    <main-page-header />

    <main-page-content />

    <main-page-footer />
  </section>
</template>

<script>
  import MainPageHeader from '~/components/MainPageHeader';
  import MainPageContent from '~/components/MainPageContent';
  import MainPageFooter from '~/components/MainPageFooter';

  export default {
    components: {
      MainPageHeader,
      MainPageContent,
      MainPageFooter,
    },
  };
</script>
