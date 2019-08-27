<style scoped>
.background--grid {
  background-image: url("~assets/img/grid_large_light.png");
  background-color: #d4d5d6;
}
</style>

<template>
  <section class="background--grid overflow-hidden">
    <div class="relative container mx-auto clearfix py-32 lg:py-64 px-8 lg:px-16">
      <div class="w-full float-left lg:w-1/2">
        <h1
          class="text-black text-4xl md:text-5xl"
          style="letter-spacing: 0.5px;"
        >We provide building blocks for your online game.</h1>

        <p class="text-grey-darker mt-8 text-xl leading-normal" style="letter-spacing: 0.5px;">
          Do not reinvent the wheel.
          We provide software services that power parts of your game.
          Use the economy service to create shops, items and currencies.
        </p>

        <div class="mt-8">
          <div class="md:inline-block">
            <nuxt-link
              to="/dashboard/register"
              class="inline-block py-4 px-6 rounded-sm bg-blue text-white no-underline font-medium text-sm hover:bg-blue-light"
              style="letter-spacing: 0.3px;"
            >Sign up for free</nuxt-link>
          </div>

          <div class="mt-2 md:mt-0 md:inline-block md:ml-4">
            <nuxt-link
              to="/services/economy-service"
              class="inline-block py-4 px-6 rounded-sm bg-grey-darker text-white no-underline font-medium text-sm"
              style="letter-spacing: 0.3px;"
            >Explore features</nuxt-link>
          </div>
        </div>
      </div>

      <div class="hidden lg:block w-1/2 float-right relative">
        <img src="~assets/img/town.png" alt class="absolute left-0" style="max-width: none;" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class Hero extends Vue {}
</script>

