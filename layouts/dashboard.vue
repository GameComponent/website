<template>
  <div class="font-sans w-full">
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class DefaultLayout extends Vue {}
</script>
