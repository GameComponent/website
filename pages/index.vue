<style scoped>
  .container--first {
    margin-top: -4rem;
    box-sizing: content-box;
  }
</style>

<template>
  <div>
    <hero />

    <section>
      <div
        class="container container--first content-box bg-white mx-auto rounded clearfix py-16 px-8 mb-16 h-64 pb-32"
      >
        <div class="px-8">
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
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container mx-auto px-8 py-32 flex">
        <div class="w-1/4 p-8">
          <img
            src="@/assets/icons/icon-lock-open.svg"
            alt=""
            class="bg-green-lighter p-3 rounded-full"
            style="width: 48px; height: 48px"
          >
          <div class="mt-4">
            <h3 class="text-black font-bold text-xl" style="letter-spacing: 0.5px">
              Vendor lock free
            </h3>
            <p class="mt-2 text-grey-darkest leading-normal">
              You can host your own services. We don't have any proprietary code we run the same code that you run on.
            </p>
          </div>
        </div>

        <div class="w-1/4 p-8">
          <img
            src="@/assets/icons/icon-external-link.svg"
            alt=""
            class="bg-green-lighter p-3 rounded-full"
            style="width: 48px; height: 48px"
          >
          <div class="mt-4">
            <h3 class="text-black font-bold text-xl" style="letter-spacing: 0.5px">
              Scalable
            </h3>
            <p class="mt-2 text-grey-darkest leading-normal">
              We use Cockroachdb as our default database. This is a distrubted database that allows for enormous scale and high availablilty.
            </p>
          </div>
        </div>

        <div class="w-1/4 p-8">
          <img
            src="@/assets/icons/icon-puzzle.svg"
            alt=""
            class="bg-green-lighter p-3 rounded-full"
            style="width: 48px; height: 48px"
          >
          <div class="mt-4">
            <h3 class="text-black font-bold text-xl" style="letter-spacing: 0.5px">
              Extendable
            </h3>
            <p class="mt-2 text-grey-darkest leading-normal">
              The code of our services is available on Github. No more hacking around a service, if you need this service to do magic you can program it to do magic.
            </p>
          </div>
        </div>

        <div class="w-1/4 p-8">
          <img
            src="@/assets/icons/icon-heart.svg"
            alt=""
            class="bg-green-lighter p-4 rounded-full"
            style="width: 48px; height: 48px"
          />
          <div class="mt-4">
            <h3 class="text-black font-bold text-xl" style="letter-spacing: 0.5px">
              Lot of features
            </h3>
            <p class="mt-2 text-grey-darkest leading-normal">
              We don't just provide technical tools, your entire team can easily make us of our services.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="pb-32">
      <integrates />
    </div>

    <github />

    <call-to-action />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import Hero from "~/components/Hero.vue"
import Integrates from "~/components/Integrates.vue"
import Github from "~/components/Github.vue"
import CallToAction from "~/components/CallToAction.vue"

@Component({
  components: {
    Hero,
    Integrates,
    Github,
    CallToAction,
  }
})
export default class Index extends Vue {

}
</script>
