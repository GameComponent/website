<style scoped>
.background--light-green {
  background-image: linear-gradient(90deg, #eef5eb, #cbfdcb);
}

.background--grid {
  background-image: url("~assets/img/grid_large_light.png");
  background-color: #d4d5d6;
}

.background--dots {
  background: linear-gradient(90deg, #fff 20px, transparent 1%) center,
    linear-gradient(#fff 20px, transparent 1%) center, #ccc;
  background-size: 22px 22px;
}

.player {
  margin: auto;
  max-width: 720px;
  transform: translateY(-8rem);
  text-emphasis: center;
}

.player__wrapper {
  display: inline-block;
  width: 100%;
  padding-top: 56.25%;
  position: relative;
}

.player__video {
  border-radius: 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.12);
}

.shadow-xl {
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.12);
}

@media (min-width: 992px) {
  .hover\:scale {
    transition: all 0.15s ease-in-out;
    will-change: transition;
  }

  .hover\:scale:hover {
    transform: scale(1.048);
  }
}
</style>

<template>
  <div>
    <section class="background--light-green">
      <div class="container mx-auto pt-32 pb-64 px-8 lg:px-16 clearfix">
        <div class="w-full text-center lg:mt-8">
          <div class="m-auto max-w-lg">
            <h1 class="text-black text-5xl w-128" style="letter-spacing: 0.5px;">Economy service</h1>
            <p class="text-grey-darker mt-8 text-xl leading-normal">
              This service powers your game's items, virtual currencies and shops.
              <br />Implement complex systems like player trading with ease.
            </p>
            <div class="mt-8">
              <nuxt-link
                to="/dashboard/register"
                class="inline-block py-4 px-6 rounded-sm bg-green text-white no-underline font-medium text-sm hover:bg-green-light"
                style="letter-spacing: 0.3px;"
              >Sign up for free</nuxt-link>
              <nuxt-link
                to="/developers/economy-service"
                class="mt-2 sm:mt-0 inline-block py-4 px-6 rounded-sm bg-grey-darker text-white no-underline font-medium text-sm hover:bg-grey-dark"
                style="letter-spacing: 0.3px;"
              >Documentation</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container bg-white mx-auto rounded clearfix">
        <div class="text-center px-8">
          <div class="player">
            <div class="player__wrapper">
              <iframe
                class="player__video"
                type="text/html"
                width="720"
                height="405"
                src="https://www.youtube.com/embed/Z0jHSMOcheQ?showinfo=0&modestbranding=1&rel=0"
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="text-center table container bg-white mx-auto rounded">
        <div class="px-8">
          <h2 class="text-black text-4xl leading-tight">Designer friendly webclient</h2>
          <p
            class="mt-4 text-grey-darker text-xl leading-normal"
          >Gamedesigners can use the webclient to easily create items, currencies and much more.</p>
        </div>
      </div>
      <div class="text-center table container bg-white mx-auto rounded pt-16">
        <div class="px-8">
          <img
            src="@/assets/img/economy/screenshot.png"
            alt="Blueprint support"
            class="shadow-xl rounded"
          />
        </div>
      </div>
    </section>

    <section class="pt-16 lg:pt-32">
      <div class="text-center table container bg-white mx-auto rounded">
        <div class="px-8">
          <h2 class="text-black text-4xl leading-tight">Virtual currencies</h2>
          <p
            class="mt-4 text-grey-darker mt-4 text-xl leading-normal"
          >You can easily create a virtual currency and reward your players with it.</p>
        </div>
      </div>

      <div
        class="table container bg-white mx-auto rounded mb-16 md:flex pt-8 lg:pt-16 px-4 md:px-0"
      >
        <div
          class="w-full md:px-8 lg:px-16 lg:w-1/2 flex justify-center items-center background--dots"
        >
          <img src="~assets/animated/example_currency.svg" alt style="width: 24rem;" class="py-8" />
        </div>

        <div class="w-full lg:w-1/2 md:pl-0 md:pl-8 lg:pl-16">
          <pre
            class="mt-8 lg:mt-0 bg-grey-lighter p-4 md:p-8 rounded text-grey-darker text-xs md:text-base relative"
          >
1  // 1. Create a currency
2  <span class="text-blue-dark">economyService</span>.<span class="text-green-dark">createCurrency</span>({
3    <span class="text-black">name</span>: <span class="text-pink-dark">'dollar'</span>,
4    <span class="text-black">short_name</span>: <span class="text-pink-dark">'USD'</span>,
5    <span class="text-black">symbol</span>: <span class="text-pink-dark">'$'</span>,
6  });
7
8  // 2. Give to player
9  <span class="text-blue-dark">economyService</span>.<span class="text-green-dark">giveCurrency</span>({
10   <span class="text-black">storage_id</span>: <span class="text-pink-dark">'alien_inventory'</span>,
11   <span class="text-black">currency_id</span>: <span class="text-pink-dark">'dollar'</span>,
12   <span class="text-black">amount</span>: <span class="text-pink-dark">'1000'</span>,
13 })
<div class="absolute pin-r pin-b mb-2 mr-2">
<nuxt-link
  to="/developers/economy-service"
  class="inline-block py-2 px-3 rounded-sm bg-green-dark text-white no-underline font-medium text-sm hover:bg-green font-sans"
  style="letter-spacing: 0.3px;"
>Go to documentation</nuxt-link>
</div>
          </pre>
        </div>
      </div>
    </section>

    <section class="pt-16 lg:pt-32">
      <div class="text-center table container bg-white mx-auto rounded">
        <div class="px-8">
          <h2 class="text-black text-4xl leading-tight">Blueprint support</h2>
          <p
            class="mt-4 text-grey-darker text-xl leading-normal"
          >Our Unreal Engine 4 SDK does not just come with an integration for C++ it also comes with Blueprint support.</p>
        </div>
      </div>
      <div class="text-center table container bg-white mx-auto rounded pt-16">
        <div class="px-8">
          <img src="@/assets/img/economy/blueprint.png" alt="Blueprint support" class="rounded" />
        </div>
      </div>
    </section>

    <section class="pt-16 lg:pt-32">
      <div class="container mx-auto clearfix bg-grey-lightest px-8 py-16 rounded-sm">
        <div class="float-left w-full sm:w-1/2 lg:w-1/4 sm:pr-8 lg:p-8">
          <img
            src="@/assets/icons/icon-lock-open.svg"
            alt
            class="bg-green-lighter p-3 rounded-full"
            style="width: 48px; height: 48px"
          />
          <div class="mt-4">
            <h3 class="text-black font-bold text-xl" style="letter-spacing: 0.5px">Vendor lock free</h3>
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
            alt
            class="bg-green-lighter p-3 rounded-full"
            style="width: 48px; height: 48px"
          />
          <div class="mt-4">
            <h3 class="text-black font-bold text-xl" style="letter-spacing: 0.5px">Scalable</h3>
            <p class="mt-2 text-grey-darkest leading-normal">
              We use Cockroachdb as our default database.
              This is a distributed database that allows for enormous scale and high availablilty.
            </p>
          </div>
        </div>

        <div class="float-left w-full sm:w-1/2 lg:w-1/4 pt-8 sm:pr-8 lg:p-8">
          <img
            src="@/assets/icons/icon-puzzle.svg"
            alt
            class="bg-green-lighter p-3 rounded-full"
            style="width: 48px; height: 48px"
          />
          <div class="mt-4">
            <h3 class="text-black font-bold text-xl" style="letter-spacing: 0.5px">Extendable</h3>
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
            alt
            class="bg-green-lighter p-4 rounded-full"
            style="width: 48px; height: 48px"
          />
          <div class="mt-4">
            <h3 class="text-black font-bold text-xl" style="letter-spacing: 0.5px">Lot of features</h3>
            <p
              class="mt-2 text-grey-darkest leading-normal"
            >We don't just provide technical tools, your entire team can easily make us of our services.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="pt-16 lg:ptnpm-32">
      <div class="text-left table container bg-white mx-auto rounded px-8 lg:px-16">
        <h2 class="text-black text-4xl leading-tight">FAQ</h2>
      </div>

      <div class="text-left table container bg-white mx-auto rounded mt-8 px-8 lg:px-16">
        <p class="text-grey-darker text-xl leading-normal">When should I use this service?</p>
        <p
          class="mt-2 leading-normal max-w-lg"
        >This service is specifically tailored towards people who are developing an online game. It deals with persistence so it can deal with the items and currencies the player owns, even after logging in and out. It is not meant to be used for session based games(games where the item only exist for the duration of a single match). If you are not sure if you should use this service for your game you can reach out over email or join the Discord server.</p>
      </div>

      <div class="text-left table container bg-white mx-auto rounded mt-8 px-8 lg:px-16">
        <p
          class="text-grey-darker text-xl leading-normal"
        >Why would I use this instead of creating my own system?</p>
        <p
          class="mt-2 leading-normal max-w-lg"
        >For the same reason you would use a game engine. It saves time, you can build from a solid foundation and most importantly you can focus on building your game.</p>
      </div>

      <div class="text-left table container bg-white mx-auto rounded mt-8 px-8 lg:px-16">
        <p
          class="text-grey-darker text-xl leading-normal"
        >Why should I choose your system instead of the others on the Unity/Unreal store?</p>
        <p
          class="mt-2 leading-normal max-w-lg"
        >Most of the plugins you see on the Unity or Unreal store that deal with inventories/economies don't deal with the persistence part. This is almost always something you will have to implement yourself. This service is setup in a generic way that allows it to be used in conjuction with those plugins.</p>
      </div>

      <div class="text-left table container bg-white mx-auto rounded mt-8 px-8 lg:px-16">
        <p class="text-grey-darker text-xl leading-normal">How do I use it in my game?</p>
        <p
          class="mt-2 leading-normal max-w-lg"
        >This service comes with SDKs/Plugins for various programming languages and game engines, this allows for easy integration. The service itself can be hosted on any type of server. We recommend running it in a Kubernetes cluster, for more details check out the documentation.</p>
      </div>

      <div class="text-left table container bg-white mx-auto rounded mt-8 px-8 lg:px-16">
        <p
          class="text-grey-darker text-xl leading-normal"
        >I am not sure if this is a fit for the game I am building, what should I do?</p>
        <p
          class="mt-2 leading-normal max-w-lg"
        >We have a Discord channel where you can ask questions, we will gladly help you. This service is setup in a very generic way to support as many games as possible, if your game's usecases don't really match with this service you can always dive into the source code and change however you want to.</p>
      </div>
    </section>

    <section class="pt-16 lg:pt-32">
      <div class="text-center table container bg-white mx-auto rounded">
        <div class="px-8">
          <h2 class="text-black text-4xl leading-tight">Ready to get started?</h2>
          <p
            class="mt-4 text-grey-darker text-xl leading-normal"
          >Use our managed service or the self hosted economy service to get started.</p>
        </div>
      </div>
      <div class="text-center table container bg-white mx-auto rounded pt-16">
        <div class="px-8">
          <nuxt-link
            to="/dashboard/register"
            class="inline-block py-4 px-6 rounded-sm bg-blue text-white no-underline font-medium text-sm hover:bg-blue-light"
            style="letter-spacing: 0.3px;"
          >Sign up for free</nuxt-link>
        </div>
      </div>
    </section>

    <section class="py-16 lg:py-32">
      <div class="container mx-auto md:flex">
        <div
          class="w-full md:w-1/2 md:flex md:justify-center md:items-center bg-grey-lighter hover:scale"
        >
          <div class="px-8 py-16 lg:px-16 lg:py-32">
            <span
              class="uppercase text-xs font-bold text-grey-darker leading-normal"
              style="letter-spacing: 0.5px;"
            >BACKEND</span>
            <h2 class="text-black text-4xl leading-tight">The service</h2>
            <p
              class="text-grey-darker leading-normal mt-4"
            >This is the economy service, run this to expose a GRPC API.</p>
            <div class="mt-8">
              <a
                href="https://github.com/GameComponent/economy-service"
                class="inline-block py-4 px-6 rounded-sm bg-grey-darker text-white no-underline font-medium text-sm hover:bg-grey-dark"
                style="letter-spacing: 0.3px;"
              >Go to project</a>
            </div>
          </div>
        </div>

        <div
          class="w-full md:w-1/2 md:flex md:justify-center md:items-center bg-green-lighter hover:scale"
        >
          <div class="px-8 py-16 lg:px-16 lg:py-32">
            <span
              class="uppercase text-xs font-bold text-grey-darker leading-normal"
              style="letter-spacing: 0.5px;"
            >FRONTEND</span>
            <h2 class="text-black text-4xl leading-tight">The webclient</h2>
            <p
              class="text-grey-darker leading-normal mt-4"
            >This is the webclient. You can easily create items, virtual currencies and shops in here.</p>
            <div class="mt-8">
              <a
                href="https://github.com/GameComponent/economy-service"
                class="inline-block py-4 px-6 rounded-sm bg-grey-darker text-white no-underline font-medium text-sm hover:bg-grey-dark"
                style="letter-spacing: 0.3px;"
              >Go to project</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class EconomyService extends Vue {
  public head() {
    return {
      title: "GameComponent - Economy service"
    };
  }
}
</script>
