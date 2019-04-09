<style scoped>
  .background--light-green {
    background-image: linear-gradient(90deg, #eef5eb, #cbfdcb)
  }


  .text-shadow {
    text-shadow: 0 2px 4px rgba(0,0,0,0.10);
  }
</style>

<template>
  <div>
    <section class="background--light-green">
      <div class="container mx-auto clearfix pt-16 lg:pt-32 pb-16 lg:pb-0 px-8 lg:px-16">
        <div class="w-full md:w-1/3 md:float-right flex justify-center items-center">
          <img src="~assets/blog/website-live/thumbnail.svg" alt="">
        </div>

        <div class="w-full md:w-2/3 pt-8 md:pt-0 md:float-left">
          <h1 class="text-black text-3xl lg:text-4xl w-128" style="letter-spacing: 0.5px;">
            Kubernetes the platform for modern multiplayer games
          </h1>
          <p class="text-grey-darker mt-4 text-xl leading-normal">
            Are you not yet running a cloud native game system?
          </p>
        </div>
      </div>
    </section>

    <section>
      <div class="container mx-auto md:clearfix">
        <div class="h-12 pt-16 px-16 lg:px-32 uppercase text-xs font-bold text-grey-dark leading-normal">
          <div class="px-8">
            <span style="letter-spacing: 0.5px;">
              <nuxt-link to="/blog" class="no-underline text-grey-dark hover:text-blue cursor-pointer">
                BLOG
              </nuxt-link>
            </span>
            <span class="mx-2" style="letter-spacing: 0.5px;">
              &rarr;
            </span>
            <span style="letter-spacing: 0.5px;">
              THIS ARTICLE
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="pt-16">
      <div class="container mx-auto md:clearfix px-8 md:px-32 text-black text-lg leading-roomy">
        <div class="md:px-8">

          <h2 class="text-semi-bold text-xl">
            My personal reason to start GameComponent
          </h2>
          <p class="mt-2 text-grey-darkest">
            The software industry is slightly changing. The last few years there has been a huge adoption of containers.
            The game developement software industry shouldn't be an exception.

            We have been following the development of two projects for a while. With the recent release of the 2019 GCD videos we want to touch on these two projects. For people who are unfamiliar with GDC, it's the Game Development Conference a yearly game development conference held yearly in San Fransisco. (You might have seen GDC if you have watched the Stadia announcement).

            Let's put our opinions on Stadia aside and focus on two awesome projects, open-match and agones.

            ** Agones

            <a href="https://www.gdcvault.com/play/1026155">
              Link to the DC talk about Agones
            </a>
            Agones is created to host, run and scale dedicated game servers on Kubernetes.
            Basically unifying all the hard work of managing a large cluster of dedicated servers into a single project.
            It allows to scaleup game servers on demand, which can be a huge cost saver.

            ** Open match

            Open match is a project that focusses on matchmaking.
            Matchmaking is a hard plumbling problem.
            So this project is

            <a href="https://www.gdcvault.com/play/1026154">
              Connecting Millions with GCP and Open Match in a Google Doodle Multiplayer Game
            </a>
          </p>

          <div class="pt-16 uppercase text-xs font-bold text-grey-dark leading-normal">
            WRITTEN ON APR 6, 2019
          </div>
        </div>
      </div>
    </section>

    <section class="pt-16 pb-32">
      <div class="container mx-auto md:clearfix px-16 lg:px-32 lg:px-16 text-center md:text-left">
        <div class=" w-full md:w-auto md:float-left clearfix">
          <div class="w-full md:w-auto md:float-left md:ml-8">
            <img
              src="~assets/blog/people/niels_lanting.jpg"
              alt=""
              class="inline-block w-16 h-16 rounded-full shadow"
            >
          </div>

          <div class="inline-block md:float-left md:ml-8">
            <div class="text-grey-darker leading-normal">
              <span class="font-semibold text-black text-xl">Niels Lanting</span>
              <br>
              <span>Founder of GameComponent</span>
            </div>
          </div>
        </div>

        <div class="w-full md:w-auto overflow-hidden pt-8 md:pt-0 md:float-right px-8">
          <social-share
            description="Game developers need better tooling"
          ></social-share>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import SocialShare from '~/components/SocialShare.vue';

@Component({
  components: {
    SocialShare,
  },
})
export default class BlogItem extends Vue {
  public head () {
    return {
      title: 'GameComponent - Kubernetes the platform for modern multiplayer games'
    };
  }
}
</script>
