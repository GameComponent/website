<style scoped>
  .background--light-blue {
    background-image: linear-gradient(-90deg, #b3f1ff, #cff5fe);
  }

  .background--blog {
    background-image: url('~assets/illustration/marketing.svg');
    background-position: center left;
    background-repeat: no-repeat;
    background-size: contain;
  }

  @media (min-width: 992px) {
    .hover\:scale:hover {
      transform: scale(1.02);
      transition: .25s;
    }
  }
</style>

<template>
  <div>
    <section class="background--light-blue">
      <div class="container mx-auto clearfix pb-16 pt-16 md:pt-32 px-8 lg:px-16">
        <div
          class="w-full md:w-1/2 md:float-right md:flex md:items-center md:justify-center"
        >
          <img
            src="~assets/illustration/game_time.svg"
            alt=""
            class="w-64 h-64"
          >
        </div>
        <div class="w-full pt-16 md:pt-0 md:w-1/2 md:float-left">
          <h1 class="text-black text-5xl w-128" style="letter-spacing: 0.5px;">
            Community
          </h1>
          <p class="text-grey-darker mt-4 text-xl leading-normal">
            Let's get together and feel all right.
          </p>
        </div>
      </div>
    </section>

    <section class="pt-16">
      <div class="container mx-auto md:clearfix px-8 lg:px-16">
        <div class="uppercase text-xs font-bold text-grey-darker leading-normal" style="letter-spacing: 0.5px;">
          <span class="ml-1">LET'S GET TALKING</span>
        </div>

        <div class="mt-8">
          <div class="md:float-left w-full md:w-1/2 md:pr-4">
            <a
              href="https://discord.gg/CPmb5N5"
              target="_blank"
              class="bg-grey-darkest rounded p-16 flex justify-center items-center no-underline no-underline hover:scale"
            >
              <div class="w-64 h-16 flex justify-center items-center">
                <img src="~assets/img/discord.svg" alt="Discord" class="w-64">
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="pt-16">
      <div class="container mx-auto md:clearfix px-8 lg:px-16">
        <div class="uppercase text-xs font-bold text-grey-darker leading-normal" style="letter-spacing: 0.5px;">
          <span class="ml-1">I WANT TO STAY UPDATED</span>
        </div>

        <div class="mt-8">
          <div class="md:float-left w-full md:w-1/2 md:pr-4">
            <nuxt-link
              target="_blank"
              to="/blog"
              class="background--blog bg-blue-light rounded p-16 flex justify-center items-center no-underline hover:scale"
            >
              <div class="w-64 h-16 flex justify-center items-center">
                <span class="text-white text-xl leading-normal">Read the blog</span>
              </div>
            </nuxt-link>
          </div>

          <div class="md:float-left w-full md:w-1/2 md:pl-4 mt-8 md:mt-0">
            <a
              href="https://twitter.com/GameComponentHQ"
              target="_blank"
              class="rounded p-16 flex justify-center items-center no-underline hover:scale"
              style="background: #1DA1F2"
            >
              <div class="w-64 h-16 flex justify-center items-center">
                <img src="~assets/img/twitter.svg" alt="Twitter" class="w-16">
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="pt-16 pb-16 lg:pb-32">
      <div class="container mx-auto md:clearfix px-8 lg:px-16">
        <div class="uppercase text-xs font-bold text-grey-darker leading-normal" style="letter-spacing: 0.5px;">
          <span class="ml-1">I WANT TO HELP</span>
        </div>

        <div class="mt-8">
          <div class="md:float-left w-full md:w-1/2 md:pr-4">
            <a
              href="https://github.com/GameComponent"
              target="_blank"
              class="bg-grey-darkest rounded p-16 flex justify-center items-center no-underline hover:scale"
            >
              <div class="w-64 h-16 flex justify-center items-center">
                <img src="~assets/img/github.svg" alt="GitHub" class="w-32">
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component
export default class Community extends Vue {
  public head () {
    return {
      title: 'GameComponent - Community'
    };
  }
}
</script>
