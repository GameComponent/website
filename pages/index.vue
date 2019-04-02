<style scoped>
  .container--first {
    margin-top: -2rem;
  }

  @media(min-width: 992px) {
    .container--first {
      margin-top: -4rem;
    }
  }
</style>

<template>
  <div>
    <hero />

    <section>
      <div
        class="container container--first bg-white mx-auto rounded clearfix pt-16 px-8"
      >
        <div class="lg:px-8">
          <div class="w-full lg:w-2/3 lg:float-left">
            <div class="lg:pr-16">
              <img
                src="~assets/img/economy/screenshot.png"
                alt=""
                class="shadow-lg rounded-sm"
              >
            </div>
          </div>
          <div class="w-full pt-16 lg:pt-0 lg:w-1/3 lg:float-right">
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
              Use the economy service to create shops, items and currencies.
              Or to do complicated things like crafting and trading.
            </p>
            <div class="mt-8">
              <a
                href="https://github.com/GameComponent/economy-service"
                class="inline-block py-4 px-6 rounded-sm bg-green text-white no-underline font-medium text-sm hover:bg-green-light"
                style="letter-spacing: 0.3px;"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container mx-auto clearfix px-8 py-16 lg:py-32">
        <div class="float-left w-full sm:w-1/2 lg:w-1/4 sm:pr-8 lg:p-8">
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

        <div class="float-left w-full sm:w-1/2 lg:w-1/4 pt-8 sm:pt-0 sm:pl-8 lg:p-8">
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

        <div class="float-left w-full sm:w-1/2 lg:w-1/4 pt-8 sm:pr-8 lg:p-8">
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

        <div class="float-left w-full sm:w-1/2 lg:w-1/4 pt-8 sm:pl-8 lg:p-8">
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

    <div class="pb-16 lg:pb-32">
      <integrates />
    </div>

    <github />

    <call-to-action />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import Hero from "./components/Hero.vue"
import Integrates from "./components/Integrates.vue"
import Github from "./components/Github.vue"
import CallToAction from "./components/CallToAction.vue"

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
