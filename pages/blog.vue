<template>
  <div>
    <h1>Blog</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component
export default class Blog extends Vue {
  public head () {
    return {
      title: 'GameComponent - Blog'
    };
  }
}
</script>
