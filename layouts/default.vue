<template>
  <div class="font-sans">
    <navigation />
    <nuxt/>
    <bottom />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import Navigation from "~/components/Navigation/index.vue"
import Bottom from "~/components/Bottom.vue"

@Component({
  components: {
    Bottom,
    Navigation,
  }
})
export default class DefaultLayout extends Vue {}
</script>
