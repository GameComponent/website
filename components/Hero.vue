<template>
  <section class="background--grid">
    <div class="container mx-auto clearfix py-64 px-8">
      <div class="w-1/2 float-left">
        <h1 class="text-black text-5xl" style="letter-spacing: 0.5px;">
          We provide building blocks for your online game.
        </h1>

        <p class="text-grey-darker mt-8 text-xl leading-normal" style="letter-spacing: 0.5px;">
          Do not reinvent the wheel.
          We provide software services that power parts of your game.
          Use our economy service to create shops, items and currencies.
        </p>

        <div class="mt-8">
          <a
            href="https://github.com/GameComponent/economy-service"
            class="inline-block py-4 px-6 rounded-sm bg-blue text-white no-underline font-medium text-sm"
            style="letter-spacing: 0.3px;"
          >
            Install the service
          </a>
          <a
            href="https://github.com/GameComponent/economy-webclient"
            class="inline-block ml-4 py-4 px-6 rounded-sm bg-grey-darker text-white no-underline font-medium text-sm"
            style="letter-spacing: 0.3px;"
          >
            Explore features
          </a>
        </div>
      </div>

      <div class="w-1/2 float-right relative">
        <img
          src="~assets/img/town.png"
          alt=""
          class="absolute left-0"
          style="max-width: none;"
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"

@Component
export default class Hero extends Vue {}
</script>

