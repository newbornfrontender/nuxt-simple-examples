<template>
  <ul>
    <li
      v-for="item of list"
      v-bind:key="item.id"
    >
      <nuxt-link v-bind:to="item.path">{{ item.title }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'component-items-list',

    props: {
      list: {
        type: Array,
        required: true,
      },
    },
  };
</script>
