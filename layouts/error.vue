<style scoped>
  .background--light-blue {
    background-image: linear-gradient(-90deg, #b3f1ff, #cff5fe);
  }
</style>

<template>
  <div class="w-full background--light-blue">
    <div class="container mx-auto py-32 md:py-64">
      <div class="px-8 lg:px-16 flex justify-center items-center">
        <div class="text-center">
          <img
            src="~assets/illustration/astronaut.svg"
            alt=""
          >
          <h1 class="block text-black text-2xl md:text-4xl mt-8">
            Page not found
          </h1>
          <nuxt-link to="/" class="p-4 shadow block mt-8 no-underline font-semibold text-grey-darkest hover:bg-white bg-grey-lighter rounded">
            Return to home page
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator"

@Component
export default class ErrorLayout extends Vue {
  @Prop(Object) readonly error!: Object
}
</script>
