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
      <div class="container mx-auto py-32 px-16 clearfix">
        <div class="w-full md:w-1/2 md:float-right md:flex md:justify-center md:items-center">
          <img
            src="~assets/illustration/mind_map.svg"
            alt=""
            class="w-64 h-64"
          >
        </div>
        <div class="w-full md:w-1/2 md:float-left">
          <h1 class="text-black text-5xl w-128" style="letter-spacing: 0.5px;">
            Developers
          </h1>
          <p class="text-grey-darker mt-4 text-xl leading-normal">
            Here you can find documentation, technical specifications and examples.
          </p>
        </div>
      </div>
    </section>

    <section>
      <div class="container container--first bg-white mx-auto rounded clearfix mb-16">
        <!-- Breadcrumbs -->
        <div class="h-12 py-6 px-8 uppercase text-xs font-bold text-grey-dark leading-normal">
          <span style="letter-spacing: 0.5px;">
            DOCUMENTATION
          </span>
          <span class="mx-2" style="letter-spacing: 0.5px;">
            &rarr;
          </span>
          <span style="letter-spacing: 0.5px;">
            HOME
          </span>
        </div>

        <div class="pt-16 px-8">
          <div class="pb-16">
            <div class="uppercase text-xs font-bold text-grey-darker leading-normal" style="letter-spacing: 0.5px;">
              <div
                class="bg-blue w-2 h-2 rounded-full inline-block v-mid"
              ></div>
              <span class="ml-1">DEVELOPER</span>
            </div>
            <h2 class="text-black text-4xl" style="letter-spacing: 0.5px;">
              The services
            </h2>
            <p class="text-grey-darker mt-4 text-xl leading-normal w-2/3" style="letter-spacing: 0.5px;">
              Select the services you want to read more about. Here you can find documentation, tutorial, examples and specifications.
            </p>
          </div>

          <div class="md:flex">
            <div class="w-full md:w-1/2 lg:w-1/3 border border-grey rounded-sm button--shadow">
              <div class="p-16">
                <h2 class="text-black text-2xl leading-tight md:mt-4">
                  Economy service
                </h2>
                <p class="text-grey-darker leading-normal mt-4">
                  Use the economy service to create items, currencies and shops.
                </p>
                <div class="mt-8">
                  <nuxt-link
                    to="/developers/economy-service"
                    class="inline-block py-4 px-6 rounded-sm bg-grey-darker text-white no-underline font-medium text-sm hover:bg-grey-dark"
                    style="letter-spacing: 0.3px;"
                  >
                    Check it out
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 bg-grey-light border border-grey rounded-sm button--shadow mt-8 md:mt-0 md:mx-8 flex justify-center items-center">
              <div class="p-16 text-center text-grey-darker leading-normal">
                More services will be created in the future.
              </div>
            </div>
            <div class="w-full lg:w-1/3 flex justify-center items-center"></div>
          </div>
        </div>

        <div class="py-16 md:pb-32">
          <div class="px-8">
            <div class="uppercase text-xs font-bold text-grey-darker leading-normal mt-4" style="letter-spacing: 0.5px;">
              QUICK LINKS
            </div>

            <div class="mt-2 md:flex">
              <div class="w-full md:w-1/3 flex justify-center items-center border border-grey rounded-sm button--shadow">
                <div class="py-6 text-grey-darkest font-bold text-xl">
                  <img
                    src="@/assets/icons/icon-news.svg"
                    alt=""
                    class="align-bottom"
                  />
                  Blog
                </div>
              </div>

              <div class="w-full md:w-1/3 flex justify-center items-center border border-grey rounded-sm button--shadow mt-8 md:mt-0 md:mx-8">
                <div class="py-6 text-grey-darkest font-bold text-xl">
                  <img
                    src="@/assets/icons/icon-group.svg"
                    alt=""
                    class="align-bottom"
                  />
                  Community
                </div>
              </div>

              <div class="w-full md:w-1/3 flex justify-center items-center border border-grey rounded-sm button--shadow mt-8 md:mt-0 ">
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
export default class Developers extends Vue {
  public head () {
    return {
      title: 'GameComponent - Developers'
    };
  }
}
</script>
