<style scoped>
  .background--clouds {
    background-color: #cfeffc;
    background-image: url('~assets/img/bg_clouds_repeat.svg');
    background-repeat: repeat-x;
    background-position: bottom left;
    background-size: 512px 622px;
  }

  .button--shadow {
    box-shadow: 0 10px 32px 0 rgba(12, 12, 13, .05), 0 2px 16px 0 rgba(12, 12, 13, .01)
  }
</style>

<template>
  <div>
    <section class="background--clouds">
      <div class="container mx-auto clearfix py-16 md:py-32 px-8 lg:px-16">
        <div
          class="w-full md:w-1/2 md:float-right md:flex md:items-center md:justify-center"
        >
          <img
            src="~assets/illustration/parachute.svg"
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

    <section class="pb-32">
      <div class="container bg-white mx-auto rounded clearfix mb-16">
        <div class="pb-16 px-8 lg:px-16">
          <div class="uppercase text-xs font-bold text-grey-darker leading-normal mt-4" style="letter-spacing: 0.5px;">
            QUICK LINKS
          </div>

          <div class="mt-2 lg:flex">
            <div class="w-full lg:w-1/4 flex justify-center items-center border border-grey rounded-sm button--shadow">
              <div class="py-6 text-grey-darkest font-bold text-xl">
                <img
                  src="@/assets/icons/icon-news.svg"
                  alt=""
                  class="align-bottom"
                />
                Twitter
              </div>
            </div>

            <div class="w-full lg:w-1/4 flex justify-center items-center border border-grey rounded-sm button--shadow mt-8 lg:mt-0 lg:mx-8 ">
              <div class="py-6 text-grey-darkest font-bold text-xl">
                <img
                  src="@/assets/icons/icon-group.svg"
                  alt=""
                  class="align-bottom"
                />
                Community
              </div>
            </div>

            <div class="w-full lg:w-1/4 flex justify-center items-center border border-grey rounded-sm button--shadow mt-8 lg:mt-0 mr-8">
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

            <div class="w-full lg:w-1/4 flex justify-center items-center border border-grey rounded-sm button--shadow mt-8 lg:mt-0">
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
