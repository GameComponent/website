<style>
.background--grid {
  background-image: url('~assets/img/grid_large_light.png');
}
</style>

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

console.log('Bottom', Bottom);
console.log('Navigation', Navigation);

@Component({
  components: {
    Bottom,
    Navigation,
  }
})
export default class DefaultLayout extends Vue {}
</script>
