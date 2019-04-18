<style scoped>
  .background--light-green {
    background-image: linear-gradient(90deg, #e4ffe4, #eef5eb)
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
          <img src="~assets/blog/kubernetes-the-platform-for-modern-multiplayer-games/thumbnail.svg" alt="">
        </div>

        <div class="w-full md:w-2/3 pt-8 md:pt-0 md:float-left">
          <h1 class="text-black text-3xl lg:text-4xl w-128" style="letter-spacing: 0.5px;">
            Kubernetes the platform for modern multiplayer games
          </h1>
          <p class="text-grey-darker mt-4 text-xl leading-normal mb-8">
            Are you not running a cloud native game system yet?
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
            The industry
          </h2>

          <p class="mt-2 text-grey-darkest">
            The software industry is ever-changing, it's in a constant flux and every day new technology is emerging. Over the last few years there has been a huge adoption of containers. With containers developers can run software in a standardized way making it easy to manage the software's dependencies.
          </p>

          <p class="mt-8 text-grey-darkest">
            With containers came other questions like: <i>"How do we make it easy to deploy those containers"</i> or <i>"how do we manage those containers"</i>. Throughout these questions were answered by a project named Kubernetes. Kubernetes became the default container orchestrator. The adoption of containers and Kubernetes caused a huge change in the industry. Spawning many more open source projects that fit into the cloud native ecosystem.
          </p>

          <p class="mt-8 text-grey-darkest">
            Instead of focussing on our own services we would like to highlight some awesome open source technologies that leverage Kubernetes and Docker. These technologies mark the starting point of the game indestry's adoption of open source and cloud native software.
          </p>

          <p class="mt-8 text-grey-darkest">
            We have been actively following the development of two projects for a while. With the recent release of the 2019 GCD videos and Cloud Next videos we want to touch on these two projects. For people who are unfamiliar with GDC, it's the Game Development Conference a yearly game development conference held yearly in San Fransisco. (You might have seen GDC if you have watched the Stadia announcement). Cloud Next is a conference about Google's cloud developments.
          </p>

          <p class="mt-8 text-grey-darkest">
            We want to focus on two awesome projects namely: Open Match and Agones. Both projects are having some major players backing them. Agones is a collaboration between Google and Ubisoft. And Open Match is made in a collaboration between Google and Unity.
          </p>

          <img
            src="~/assets/blog/kubernetes-the-platform-for-modern-multiplayer-games/agones.svg"
            alt=""
            class="w-32 mt-8"
          >

          <h2 class="text-semi-bold text-xl">
            Agones
          </h2>

          <p class="mt-2 text-grey-darkest">
            <a href="https://agones.dev/site/" class="no-underline text-blue" target="_blank">Agones</a> is made to host, run and scale dedicated game servers on Kubernetes.
            Basically unifying all the hard work of managing a large cluster of dedicated servers into a single framework.
            It allows to scale up game servers on demand, which can be a huge costsaver. A lot of companies are writing their own plumbing code to orchestrate dedicated servers.
          </p>

          <p class="mt-2 text-grey-darkest">
            Agones is an extension to Kubernetes, it adds Agones specific types to Kubernetes like: GameServer, Fleet and Allocation. In a normal Kubernetes deployment you normally host stateless applications. It doesn't matter if one stateless application goes down because there is another stateless application running to handle incoming requests. However gameservers are stateful applications. You absolutely do not want to a gameserver to go down while there are still players playing on that server. Agones puts guardrails in place to prevent this from happening. To get started with Agones you should check out their <a href="https://agones.dev/site/" target="_blank" class="no-underline text-blue">website</a>.
          </p>

          <img
            src="~/assets/blog/kubernetes-the-platform-for-modern-multiplayer-games/openmatch.png"
            alt=""
            class="w-64 mt-8"
          >

          <h2 class="text-semi-bold text-xl mt-8">
            Open Match
          </h2>

          <p class="mt-2 text-grey-darkest">
            <a href="https://github.com/GoogleCloudPlatform/open-match" class="no-underline text-blue" target="_blank">Open Match</a> is a framework that focusses on matchmaking.
            Matchmaking is a hard problem with a lot of moving parts. This framework make it easy to focus on game specific matchmaking logic, instead of focussing on the plumbing surrounding the matchmaking.
          </p>

          <h2 class="text-semi-bold text-xl mt-8">
            Videos
          </h2>

          <p class="mt-2 text-grey-darkest">
            In this video you'll get a nice overview of both projects.
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Imf_urBB7SI"
              frameborder="0"
              class="mt-8"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </p>

          <p class="mt-8 text-grey-darkest">
            If you want to hear more about those projects you should checkout the following videos:

            <ul class="mt-4">
              <li>
                <a href="https://www.gdcvault.com/play/1026154" class="no-underline text-blue" target="_blank">
                  Connecting Millions with GCP and Open Match in a Google Doodle Multiplayer Game
                </a>
              </li>

              <li>
                <a href="https://www.gdcvault.com/play/1026155" class="no-underline text-blue" target="_blank">
                  Agones: Scaling Multiplayer Game Servers with Open Source (Presented by Google Cloud)
                </a>
              </li>
            </ul>
          </p>

          <p class="mt-8 text-grey-darkest">
            We are not affiliated with the parties behind Agones and Open Match. We want to highlight those projects because they are awesome endeavours.
          </p>

          <div class="pt-16 uppercase text-xs font-bold text-grey-dark leading-normal">
            WRITTEN ON APR 18, 2019
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
            description="Kubernetes the platform for modern multiplayer games"
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
