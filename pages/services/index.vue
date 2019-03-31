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
      <div class="container mx-auto py-32 px-16 clearfix">
        <div class="w-full md:w-1/2 md:float-right md:flex md:justify-center md:items-center">
          <img
            src="~assets/illustration/data_center.svg"
            alt=""
            class="w-64 h-64"
          >
        </div>
        <div class="md:w-1/2 md:float-left">
          <h1 class="text-black text-5xl w-128" style="letter-spacing: 0.5px;">
            Services
          </h1>
          <p class="text-grey-darker mt-4 text-xl leading-normal">
            Learn about the variety of services that you can use to power your game.
          </p>
        </div>

      </div>
    </section>

    <section>
      <div
        class="container container--first content-box bg-white mx-auto rounded py-16 px-8 mb-16 pb-32"
      >
        <div class="px-8 clearfix">
          <div class="w-2/3 float-left relative">
            <div class="absolute pin-r pr-16">
              <img
                src="~assets/img/economy/screenshot.png"
                alt=""
                class="shadow-lg rounded-sm"
              >
            </div>
          </div>
          <div class="w-1/3 float-right">
            <div class="uppercase text-xs font-bold text-grey-darker leading-normal mt-4" style="letter-spacing: 0.5px;">
              <div
                class="w-2 h-2 rounded-full inline-block v-mid"
                style="background: #38c172;"
              ></div>
              <span class="ml-1">SERVICE</span>
            </div>
            <h2 class="text-black text-4xl" style="letter-spacing: 0.5px;">
              Economy service
            </h2>
            <p class="text-grey-darker mt-8 text-xl leading-normal" style="letter-spacing: 0.5px;">
              Do not reinvent the wheel.
              We provide software services that power parts of your game.
              Use our economy service to create shops, items and currencies.
            </p>
            <div class="mt-8">
              <nuxt-link
                to="/services/economy-service"
                class="inline-block py-4 px-6 rounded-sm bg-blue text-white no-underline font-medium text-sm"
                style="letter-spacing: 0.3px;"
              >
                Learn more
              </nuxt-link>
            </div>
          </div>
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
