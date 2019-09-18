<style scoped>
.background--light-grey {
  background-color: #f5f5f5;
}

.text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>

<template>
  <div class="container mx-auto px-8 pb-32" style="margin-top: 160px; max-width: 800px;">
    <section>
      <div class="background--light-grey container mx-auto clearfix py-16 mx-8 lg:mx-16 rounded-sm">
        <div class="w-full flex justify-center items-center">
          <img src="~assets/blog/agones-stable-release/agones.svg" alt class="w-64 h-64" />
        </div>
      </div>
    </section>

    <section class="pt-16">
      <div class="container mx-auto clearfix pb-16 lg:pb-0">
        <div class="w-full pt-8 md:pt-0 text-center">
          <h1
            class="text-black text-4xl lg:text-5xl"
            style="letter-spacing: 0.5px;"
          >Agones releases stable 1.0</h1>
          <p
            class="text-grey-darker mt-4 text-xl leading-normal"
          >Host, Run and Scale dedicated game servers on Kubernetes.</p>
        </div>
      </div>
    </section>

    <section class="pt-16">
      <div class="container mx-auto md:clearfix text-black text-lg leading-roomy">
        <div class="w-full">
          <h2 class="text-semi-bold text-xl">A toast to Agones</h2>

          <p class="mt-2 text-grey-darkest">
            This week
            <a
              href="https://agones.dev/site/"
              class="no-underline text-blue"
              target="_blank"
              rel="noopener"
            >Agones</a> released their 1.0 version, this is a huge milestone and we want to congratulate everyone involved.
          </p>

          <h2 class="mt-8 text-semi-bold text-xl">What is Agones?</h2>

          <p class="mt-2 text-grey-darkest">
            <a
              href="https://agones.dev/site/"
              class="no-underline text-blue"
              target="_blank"
              rel="noopener"
            >Agones</a> allows you to host, run and scale dedicated game servers on Kubernetes. Kubernetes is the de facto container orchestration platform. It is hard to create your own system that scales game servers based on player demand. Agones is an open-source solution to help you achieve this. There is no need to build on top of a proprietary solution or to build your own solution, Agones handles it for you batteries-included.
          </p>

          <h2 class="mt-8 text-semi-bold text-xl">Why is this huge news?</h2>

          <p
            class="mt-2 text-grey-darkest"
          >Cloud services play a huge role in most software industries. But it was not really tailored towards game development, most software is written in a stateless manner yet game servers are inherently stateful. Agones is made to run stateful game servers on top of Kubernetes. Kubernetes is an open-source system that you can run on your own metal or you can use managed Kubernetes solutions provided by almost all major cloud providers. Typically game developers have to deal with an audience that's globally distributed and a server load that is unpredictable, Kubernetes in combination with a cloud provider is an awesome solution to deal with this.</p>

          <p class="mt-8 text-grey-darkest">
            We are not affiliated with Agones. We want to highlight it because it is an awesome endeavor. Check out their website at
            <a
              href="https://agones.dev/site/"
              class="no-underline text-blue"
              target="_blank"
              rel="noopener"
            >https://agones.dev</a>.
          </p>

          <div
            class="pt-16 uppercase text-xs font-bold text-grey-dark leading-normal"
          >WRITTEN ON SEP 18, 2019</div>
        </div>
      </div>
    </section>

    <section class="pt-16 pb-32">
      <div class="container mx-auto md:clearfix text-center md:text-left">
        <div class="w-full md:w-auto md:float-left clearfix">
          <div class="w-full md:w-auto md:float-left">
            <img
              src="~assets/blog/people/niels_lanting.jpg"
              alt
              class="inline-block w-16 h-16 rounded-full shadow"
            />
          </div>

          <div class="inline-block md:float-left md:ml-8">
            <div class="text-grey-darker leading-normal">
              <span class="font-semibold text-black text-xl">Niels Lanting</span>
              <br />
              <span>Founder of GameComponent</span>
            </div>
          </div>
        </div>

        <div class="w-full md:w-auto overflow-hidden pt-8 md:pt-0 md:float-right px-8">
          <social-share description="Kubernetes the platform for modern multiplayer games"></social-share>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import SocialShare from "~/components/SocialShare.vue";

@Component({
  components: {
    SocialShare
  }
})
export default class BlogItem extends Vue {
  public head() {
    return {
      title:
        "GameComponent - Kubernetes the platform for modern multiplayer games"
    };
  }
}
</script>
