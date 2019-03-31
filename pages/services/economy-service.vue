<style scoped>
  .background--light-green {
    background-image: linear-gradient(90deg, #eef5eb, #cbfdcb)
  }

  .container--first {
    margin-top: -4rem;
  }
</style>

<template>
  <div>
    <section class="background--light-green">
      <div class="container mx-auto py-32 px-16 clearfix">
        <div class="w-full md:w-1/2 md:float-right md:flex md:justify-center md:items-center">
          <img
            src="~assets/img/town.png"
            alt=""
            style="max-height: 16rem;"
          >
        </div>
        <div class="w-full md:w-1/2 md:float-left">
          <h1 class="text-black text-5xl w-128" style="letter-spacing: 0.5px;">
            Economy service
          </h1>
          <p class="text-grey-darker mt-4 text-xl leading-normal">
            Do you need items, virtual currencies and shops?<br>
            This service is for you.
          </p>
        </div>

      </div>
    </section>

    <section>
      <div class="container container--first bg-white mx-auto rounded clearfix mb-16">
        <div class="h-12 py-6 px-8 uppercase text-xs font-bold text-grey-dark leading-normal">
          <span style="letter-spacing: 0.5px;">
            SERVICES
          </span>
          <span class="mx-2" style="letter-spacing: 0.5px;">
            &rarr;
          </span>
          <span style="letter-spacing: 0.5px;">
            ECONOMY-SERVICE
          </span>
        </div>

        <div class="pt-16 pb-32 px-8 w-2/3">
          <span class="uppercase text-xs font-bold text-grey-darker leading-normal" style="letter-spacing: 0.5px;">
            THE BEGINNING
          </span>
          <h2 class="text-black text-4xl leading-tight">
            The economy service
          </h2>
          <p class="text-grey-darker leading-normal mt-6">
            If there is one thing that every game shares, it is an economy.
            Whether you are making a MMORPG, FPS or a crafting game.
            Every game has items or currencies in some sort of form.
          </p>
          <p class="text-grey-darker leading-normal mt-4">
            We decided to put our initial focus on providing the best possible economy service you can imagine.
            Simply because it is such a fundemental service that every game needs.
          </p>
          <p class="text-grey-darker leading-normal mt-4">
            We try to differenciete this service from the compitition.
            First by not tying users to a specific platform.
            Secondly we want game developers to be able to edit the source code of the service in case it does not cover all the needed features.
          </p>
          <p class="text-grey-darker leading-normal mt-4">
            We split the economy service build in two parts, the service itself and the webclient(ui).
            The service it build on top of GRPC which allows it to communicate with nearly every programming language.
            So no matter what language you use you can easily integrate it with your backend.
          </p>
          <p class="text-grey-darker leading-normal mt-4">
            The webclient allows for some proper monitoring of the game's economy.
            With the build-in role system you can allow game designers to easily create ingame items.
            While your devops personel can monitor the economy.
          </p>
          <p class="text-grey-darker leading-normal mt-4">
            Our vision is to partner up with some game studios and/or indies.
            So the game developers can focus on creating their game and we can focus on creating awesome tools.
            And to eventually bring this economy service to a stable release.
            When we get to this point we will allow developers to use the economy service as a software as a service product.
          </p>
        </div>
      </div>
    </section>

    <section class="md:flex">
      <div class="w-full md:w-1/2 flex justify-center items-center bg-grey-lighter">
        <div class="px-8 py-16 lg:py-32">
          <span class="uppercase text-xs font-bold text-grey-darker leading-normal" style="letter-spacing: 0.5px;">
            BACKEND
          </span>
          <h2 class="text-black text-4xl leading-tight">Star our project on Github</h2>
          <p class="text-grey-darker leading-normal mt-4">
            Feel free to add your ideas as issues.<br/>
            Need help? Visit Stackoverflow.
          </p>
          <div class="mt-8">
            <a
              href="https://github.com/GameComponent/economy-service"
              class="inline-block py-4 px-6 rounded-sm bg-grey-darker text-white no-underline font-medium text-sm"
              style="letter-spacing: 0.3px;"
            >
              Go to project
            </a>
          </div>
        </div>
      </div>

      <div class="w-full md:w-1/2 flex justify-center items-center bg-green-lighter">
        <div class="px-8 py-16 lg:py-32">
          <span class="uppercase text-xs font-bold text-grey-darker leading-normal" style="letter-spacing: 0.5px;">
            FRONTEND
          </span>
          <h2 class="text-black text-4xl leading-tight">Star our project on Github</h2>
          <p class="text-grey-darker leading-normal mt-4">
            Feel free to add your ideas as issues.<br/>
            Need help? Visit Stackoverflow.
          </p>
          <div class="mt-8">
            <a
              href="https://github.com/GameComponent/economy-service"
              class="inline-block py-4 px-6 rounded-sm bg-grey-darker text-white no-underline font-medium text-sm"
              style="letter-spacing: 0.3px;"
            >
              Go to project
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
export default class EconomyService extends Vue {
  public head () {
    return {
      title: 'GameComponent - Economy service'
    };
  }
}
</script>
