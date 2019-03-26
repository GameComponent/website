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
            Blog
          </h1>
          <p class="text-grey-darker mt-4 text-xl leading-normal">
            Let's get together and feel all right.
          </p>
        </div>

        <div
          class="w-1/2 float-left flex items-center justify-center"
        >
          <img
            src="~assets/illustration/marketing.svg"
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

        <div class="pt-32 pb-16">
          <div class="px-8">
            <div class="uppercase text-xs font-bold text-grey-darker leading-normal mt-4" style="letter-spacing: 0.5px;">
              QUICK LINKS
            </div>

            <div class="mt-2 flex">
              <div class="w-1/4 flex justify-center items-center border border-grey rounded-sm button--shadow">
                <div class="py-6 text-grey-darkest font-bold text-xl">
                  <img
                    src="@/assets/icons/icon-news.svg"
                    alt=""
                    class="align-bottom"
                  />
                  Twitter
                </div>
              </div>

              <div class="w-1/4 flex justify-center items-center border border-grey rounded-sm button--shadow mx-8 ">
                <div class="py-6 text-grey-darkest font-bold text-xl">
                  <img
                    src="@/assets/icons/icon-group.svg"
                    alt=""
                    class="align-bottom"
                  />
                  Community
                </div>
              </div>

              <div class="w-1/4 flex justify-center items-center border border-grey rounded-sm button--shadow mr-8">
                  <a
                    href="https://www.youtube.com/channel/UC6dsYX3e2yAX5uM3UaOGnEQ"
                    class="py-6 w-full text-center no-underline text-grey-darkest font-bold text-xl hover:bg-grey-lighter"
                  >
                    <img
                      src="@/assets/icons/icon-video.svg"
                      alt=""
                      class="align-bottom"
                    />
                    Videos
                  </a>
              </div>

              <div class="w-1/4 flex justify-center items-center border border-grey rounded-sm button--shadow">
                  <a
                    href="https://www.youtube.com/channel/UC6dsYX3e2yAX5uM3UaOGnEQ"
                    class="py-6 w-full text-center no-underline text-grey-darkest font-bold text-xl hover:bg-grey-lighter"
                  >
                    <img
                      src="@/assets/icons/icon-video.svg"
                      alt=""
                      class="align-bottom"
                    />
                    Videos
                  </a>
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
