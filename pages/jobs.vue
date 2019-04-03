<style scoped>
  .background--light-blue {
    background-image: linear-gradient(-90deg, #b3f1ff, #cff5fe);
  }
</style>

<template>
  <div>
    <section class="background--light-blue">
      <div class="container mx-auto clearfix py-32 px-8 lg:px-16">
        <div
          class="w-full md:w-1/2 md:float-right flex items-center justify-center"
        >
          <img
            src="~assets/illustration/analyze_market.svg"
            alt=""
            class="w-64 h-64"
          >
        </div>
        <div class="w-full md:w-1/2 md:float-left">
          <h1 class="text-black text-5xl w-128" style="letter-spacing: 0.5px;">
            Jobs
          </h1>
          <p class="text-grey-darker mt-4 text-xl leading-normal">
            Currently we do not offer any paid positions. However we are looking for partnerships with studios, indies or hobbiest.
          </p>
        </div>
      </div>
    </section>

    <section>
      <div class="container bg-white mx-auto rounded clearfix pt-16 lg:pt-32">
        <div class="w-full md:float-right md:w-1/3 pl-8 md:pl-16">
          <img src="~assets/illustration/convert.svg" alt="" class="w-64">
        </div>
        <div class="w-full md:float-left md:w-2/3 px-8 lg:px-16 mt-8 md:mt-0">
          <span class="uppercase text-xs font-bold text-grey-darker leading-normal" style="letter-spacing: 0.5px;">
            OUR PHILOSOPHY
          </span>
          <h2 class="text-black text-4xl leading-tight">
            How we work
          </h2>
          <p class="text-grey-darker leading-roomy mt-6">
            All our work is done completely in the open. We current do not own any private repositories.
            The services code is <nuxt-link to="/license" class="no-underline text-blue">licensed under the Apache 2.0 + Commons Clause license</nuxt-link>.
            To see what technoglogies we use just check out our <a class="no-underline text-blue" href="http://github.com/GameComponent" target="_blank">Github repository &#x1F5D7;</a>.
          </p>
        </div>
      </div>
    </section>

    <section>
      <div class="container bg-white mx-auto rounded clearfix py-16 lg:py-32">
        <div class="w-full md:w-1/3 md:float-left pl-8 md:pl-16">
          <img
            src="~assets/illustration/problem_solving.svg"
            alt=""
            class="w-64"
          >
        </div>

        <div class="w-full md:w-2/3 md:float-left px-8 lg:px-16 pt-8 md:pt-0">
          <span class="uppercase text-xs font-bold text-grey-darker leading-normal" style="letter-spacing: 0.5px;">
            WHAT WE ARE LOOKING FOR
          </span>
          <h2 class="text-black text-4xl leading-tight">
            We are looking for partnerships
          </h2>
          <p class="text-grey-darker leading-roomy mt-6">
            Currently we are in early stages of development. In this stage we are looking for partnerships with studios, indies or hobbiest.
            By partnering up with us we will help you implement the economy service and improve it to fit your use cases.
            This creates a win-win situation where we can improve the economy service and you get everything related to that service in your game.
            Read more about it in our <nuxt-link to="/roadmap" class="no-underline text-blue">roadmap</nuxt-link>.
          </p>
          <div class="uppercase text-xs font-bold text-grey-darker leading-roomy mt-8" style="letter-spacing: 0.5px;">
            FUTURE PROOF OUT OF THE BOX
          </div>
          <p class="text-grey-darker leading-roomy mt-2">
            Once the new versions of the service are released it should be straight forward to update and implement those new features for your game.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component
export default class Jobs extends Vue {
  public head () {
    return {
      title: 'GameComponent - Jobs'
    };
  }
}
</script>
