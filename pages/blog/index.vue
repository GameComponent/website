<style scoped>
  .background--test {
    background-image: url('~assets/blog/website-live/thumbnail.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }

  @media (min-width: 992px) {
    .hover\:scale:hover {
      transform: scale(1.01);
      transition: .25s;
    }
  }
</style>

<template>
  <div class="pt-16">
    <section>
      <div class="container mx-auto clearfix pt-16 pb-32 px-8 lg:px-16 lg:clearfix">
        <div class="w-full lg:w-2/3 lg:float-left">
          <div>
            <div class="w-2 h-2 rounded-full inline-block v-mid bg-blue"></div>
            <span class="uppercase text-xs font-bold text-grey-darker leading-normal" style="letter-spacing: 0.5px;">
              WEBSITE
            </span>
          </div>

          <nuxt-link to="/blog/website-online" class="no-underline">
            <h2 class="text-black mt-4 text-2xl leading-tight">
              Website now available online
            </h2>
          </nuxt-link>

          <div class="text-grey-darker leading-normal mt-2">
            by <a href="https://nielslanting.nl" target="_blank" class="no-underline text-blue">Niels Lanting</a> on Apr 4, 2019
          </div>

          <nuxt-link to="/blog/website-online" class="no-underline">
            <div class="w-full mt-8 h-64 rounded bg-blue-light background--test hover:scale"></div>
            <p class="mt-4 text-grey-darker">
              There is still a lot of work in progress. But small steps will lead to big changes.
            </p>
          </nuxt-link>
        </div>

        <div class="w-full lg:w-1/3 lg:float-left">
          <div class="pl-16">
            <div class="bg-grey-lighter p-8 rounded">
              <div class="text-black text-xl leading-tight">
                Want to stay updated?
              </div>
              <div class="text-grey-darker leading-normal">
                Follow us on Twitter
              </div>
              <div class="mt-4">
                <a
                  href="https://twitter.com/GameComponentHQ?ref_src=twsrc%5Etfw"
                  class="twitter-follow-button"
                  data-size="large"
                  data-show-count="false"
                  data-show-screen-name="false"
                ></a>
                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
              </div>
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
export default class Blog extends Vue {
  public head () {
    return {
      title: 'GameComponent - Blog'
    };
  }
}
</script>
