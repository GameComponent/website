<style scoped>
  .background--light-blue {
    background-image: linear-gradient(-90deg, #b3f1ff, #cff5fe);
  }

  .container--first {
    margin-top: -4rem;
  }

  .button--shadow {
    box-shadow: 0 10px 32px 0 rgba(12, 12, 13, .05), 0 2px 16px 0 rgba(12, 12, 13, .01)
  }
</style>

<template>
  <div>
    <section class="background--light-blue">
      <div class="container mx-auto clearfix py-32 px-8">
        <div class="w-1/2 float-left">
          <h1 class="text-black text-5xl w-128" style="letter-spacing: 0.5px;">
            Jobs
          </h1>
          <p class="text-grey-darker mt-4 text-xl leading-normal">
            We are hiring! <span class="text-xs">(sometimes)</span>
          </p>
        </div>

        <div
          class="w-1/2 float-left flex items-center justify-center"
        >
          <img
            src="~assets/illustration/analyze_market.svg"
            alt=""
            class="w-64 h-64"
          >
        </div>
      </div>
    </section>

    <section class="pb-32">
      <div class="container container--first bg-white mx-auto rounded clearfix mb-16">
        <!-- Breadcrumbs -->
        <div class="h-12 py-6 px-8 uppercase text-xs font-bold text-grey-dark leading-normal">
          <span style="letter-spacing: 0.5px;">
            COMMUNITY
          </span>
          <span class="mx-2" style="letter-spacing: 0.5px;">
            &rarr;
          </span>
          <span style="letter-spacing: 0.5px;">
            HOME
          </span>
        </div>

        <div class="pt-16 pb-32 px-8 w-2/3">
          <span class="uppercase text-xs font-bold text-grey-darker leading-normal" style="letter-spacing: 0.5px;">
            JOBS
          </span>
          <h2 class="text-black text-4xl leading-tight">
            What we offer
          </h2>
          <p class="text-grey-darker leading-normal mt-6">
            You can do your job from a remote location. All your developments will be publicly visible.
            To see what technoglogies we use just checkout our <a href="http://github.com/GameComponent">Github repository</a>.
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
