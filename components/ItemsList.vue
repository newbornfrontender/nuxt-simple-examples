<template>
  <ul>
    <li
      v-for="item of itemsList"
      v-bind:key="item.id"
    >
      <nuxt-link v-bind:to="item.path">{{ item.title }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      itemsList: {
        type: Array,
        required: true,
      },
    },
  };
</script>
