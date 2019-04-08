<style scoped>
  .background--light-green {
    background-image: linear-gradient(90deg, #eef5eb, #cbfdcb)
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
    <section class="background--light-green">
      <div class="container mx-auto pt-32 pb-16 px-8 lg:px-16 clearfix">
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
          <div class="mt-8">
            <nuxt-link
              to="/developers/economy-service/installation"
              class="inline-block py-4 px-6 rounded-sm bg-green text-white no-underline font-medium text-sm hover:bg-green-light"
              style="letter-spacing: 0.3px;"
            >
              Installation guide
            </nuxt-link>
            <nuxt-link
              to="/developers/economy-service"
              class="mt-2 sm:mt-0 inline-block py-4 px-6 rounded-sm bg-grey-darker text-white no-underline font-medium text-sm hover:bg-grey-dark"
              style="letter-spacing: 0.3px;"
            >
              Documentation
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container bg-white mx-auto rounded clearfix mb-16">
        <div class="pt-16 lg:pt-32 px-8 lg:px-16 w-full lg:w-2/3">
          <span class="uppercase text-xs font-bold text-grey-darker leading-normal" style="letter-spacing: 0.5px;">
            THE STORY
          </span>
          <h2 class="text-black text-4xl leading-tight">
            The economy service
          </h2>
          <p class="text-grey-darker leading-roomy mt-6">
            If there is one thing that every game shares, it is an economy.
            Whether you are making a MMORPG, FPS or a crafting game.
            Every game has items or currencies in some sort of form.
          </p>
          <p class="text-grey-darker leading-roomy mt-6">
            We decided to put our initial focus on providing the best possible economy service you can imagine.
            Simply because it is such a fundemental service that every game needs.
          </p>
          <p class="text-grey-darker leading-roomy mt-6">
            We try to differenciete this service from the compitition.
            First by not tying users to a specific platform.
            Secondly we want game developers to be able to edit the source code of the service in case it does not cover all the needed features.
          </p>
          <p class="text-grey-darker leading-roomy mt-6">
            We split the economy service build in two parts, the service itself and the webclient(ui).
            The service it build on top of GRPC which allows it to communicate with nearly every programming language.
            So no matter what language you use you can easily integrate it with your backend.
          </p>
          <p class="text-grey-darker leading-roomy mt-6">
            The webclient allows for some proper monitoring of the game's economy.
            With the build-in role system you can allow game designers to easily create ingame items.
            While your devops personel can monitor the economy.
          </p>
          <p class="text-grey-darker leading-roomy mt-6">
            Our vision is to partner up with some game studios and/or indies.
            So the game developers can focus on creating their game and we can focus on creating awesome tools.
            And to eventually bring this economy service to a stable release.
            When we get to this point we will allow developers to use the economy service as a software as a service product.
          </p>
        </div>
      </div>
    </section>

    <section class="pt-16 lg:pt-32">
      <div class="container mx-auto clearfix bg-grey-lightest px-8 py-16 rounded-sm">
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
              You can host all services on your own metal.
              We don't have any closed source code.
              We run the same code that you run on.
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
              We use Cockroachdb as our default database.
              This is a distributed database that allows for enormous scale and high availablilty.
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
              The code of the services is available on GitHub.
              No more black box magic.
              Everything can be seen and modified.
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

    <section class="py-16 lg:py-32">
      <div class="container mx-auto md:flex">
        <div class="w-full md:w-1/2 md:flex md:justify-center md:items-center bg-grey-lighter hover:scale">
          <div class="px-8 py-16 lg:px-16 lg:py-32">
            <span class="uppercase text-xs font-bold text-grey-darker leading-normal" style="letter-spacing: 0.5px;">
              BACKEND
            </span>
            <h2 class="text-black text-4xl leading-tight">The service</h2>
            <p class="text-grey-darker leading-normal mt-4">
              This is the economy service, run this to expose a GRPC API.
            </p>
            <div class="mt-8">
              <a
                href="https://github.com/GameComponent/economy-service"
                class="inline-block py-4 px-6 rounded-sm bg-grey-darker text-white no-underline font-medium text-sm hover:bg-grey-dark"
                style="letter-spacing: 0.3px;"
              >
                Go to project
              </a>
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/2 md:flex md:justify-center md:items-center bg-green-lighter hover:scale">
          <div class="px-8 py-16 lg:px-16 gitlg:py-32">
            <span class="uppercase text-xs font-bold text-grey-darker leading-normal" style="letter-spacing: 0.5px;">
              FRONTEND
            </span>
            <h2 class="text-black text-4xl leading-tight">The webclient</h2>
            <p class="text-grey-darker leading-normal mt-4">
              This is the webclient. You can easily create items, virtual currencies and shops in here.
            </p>
            <div class="mt-8">
              <a
                href="https://github.com/GameComponent/economy-service"
                class="inline-block py-4 px-6 rounded-sm bg-grey-darker text-white no-underline font-medium text-sm hover:bg-grey-dark"
                style="letter-spacing: 0.3px;"
              >
                Go to project
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
export default class EconomyService extends Vue {
  public head () {
    return {
      title: 'GameComponent - Economy service'
    };
  }
}
</script>
