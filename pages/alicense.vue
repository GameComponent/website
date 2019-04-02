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
            src="~assets/illustration/checklist.svg"
            alt=""
            class="w-64 h-64"
          >
        </div>
        <div class="w-full md:w-1/2 md:float-left">
          <h1 class="text-black text-5xl w-128" style="letter-spacing: 0.5px;">
            The license
          </h1>
          <p class="text-grey-darker mt-4 text-xl leading-normal">
            An important aspect of software is the chosen license. We will explain why we have chosen the Apache 2.0 + Commons Clause license.
          </p>
        </div>
      </div>
    </section>

    <section>
      <div class="container bg-white mx-auto rounded clearfix py-16 lg:py-32">
        <div class="w-full md:float-left md:w-2/3 px-8 lg:px-16 mt-8 md:mt-0">
          <span class="uppercase text-xs font-bold text-grey-darker leading-normal" style="letter-spacing: 0.5px;">
            THE LICENSE
          </span>
          <h2 class="text-black text-4xl leading-tight">
            Apache 2.0 + Commons Clause
          </h2>
          <p class="text-grey-darker leading-roomy mt-6">
            The services are released under the Apache 2.0 + Commons Clause license. This is a standard Apache 2.0 license with a restriction on the sale of the software.
            Because this is not a true open source license we refer to our code as "source-available".
          </p>
          <p class="text-grey-darker leading-roomy mt-6">
            For a studio, indie or hobbiest this license has little to no impact in comparison to a Apache 2.0 license.
          </p>
          <p class="text-grey-darker leading-roomy mt-6">
            For a hosting/cloud provider this license does have implications.
            We do believe that having our services available in as many places as possible is important for everyone.
            If you are interested in created a managed/hosted solution for our services please <nuxt-link to="/contact">contact us</nuxt-link>.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component
export default class License extends Vue {
  public head () {
    return {
      title: 'GameComponent - License'
    };
  }
}
</script>
