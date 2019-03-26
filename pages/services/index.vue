<style scoped>
  .background--light-green {
    background-image: linear-gradient(90deg, #eef5eb, #cbfdcb)
  }

  .container--first {
    margin-top: -4rem;
  }
</style>

<template>
  <div>
    <section class="background--light-green">
      <div class="container mx-auto py-32 px-8 clearfix">
        <div class="w-1/2 float-left">
          <h1 class="text-black text-5xl w-128" style="letter-spacing: 0.5px;">
            Services
          </h1>
          <p class="text-grey-darker mt-4 text-xl leading-normal">
            Learn about the variety of services that you can use to power your game.
          </p>
        </div>
        <div class="w-1/2 float-left flex justify-center items-center">
          <img
            src="~assets/illustration/data_center.svg"
            alt=""
            class="w-64 h-64"
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component
export default class Services extends Vue {
  public head () {
    return {
      title: 'GameComponent - Services'
    };
  }
}
</script>
