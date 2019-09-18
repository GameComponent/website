<style scoped>
.background--light-blue {
  background-image: linear-gradient(-90deg, #b3f1ff, #cff5fe);
}

.background--test {
  background-color: #b3f1ff;
}

.text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>

<template>
  <div class="container mx-auto px-8" style="margin-top: 160px; max-width: 800px;">
    <section>
      <div
        class="bg-blue-light background--test container mx-auto clearfix pt-16 md:pt-32 pb-16 lg:pb-0 mx-8 lg:mx-16 rounded-sm"
      >
        <div class="w-full flex justify-center items-center">
          <img src="~assets/blog/website-live/thumbnail.svg" alt />
        </div>
      </div>
    </section>

    <section class="pt-16">
      <div class="container mx-auto clearfix pb-16 lg:pb-0">
        <div class="w-full pt-8 md:pt-0 text-center">
          <h1
            class="text-black text-4xl lg:text-5xl"
            style="letter-spacing: 0.5px;"
          >Game developers need better tooling</h1>
          <p
            class="text-grey-darker mt-4 text-xl leading-normal"
          >It looks like everyone is reinventing the wheel, simply to beat each other to market.</p>
        </div>
      </div>
    </section>

    <section class="pt-16">
      <div class="container mx-auto md:clearfix text-black text-lg leading-roomy">
        <div class="w-full">
          <h2 class="text-semi-bold text-xl">My personal reason to start GameComponent</h2>
          <p class="mt-2 text-grey-darkest">
            The idea for GameComponent started late 2018. As a full-stack developer, I wanted to take a dive into game development.
            I used to do some game development during my teenage years however over time I transition more towards web development.
          </p>

          <p class="mt-8 text-grey-darkest">
            Creating an online multiplayer game is incredibly hard and there are a lot of moving pieces.
            One thing that frustrated about game development is the fierce competition between studios.
            In the web development world a lot of companies and individuals collaborate to create awesome tech.
            Yet when I look at the game development world, there is a lot less collaboration between studios.
            It looks like everyone is reinventing the wheel, simply to beat each other to market.
          </p>

          <p class="mt-8 text-grey-darkest">
            I wanted to create an inventory so players could hold onto items. Sounds simple right? With publishing platforms like Steam you get a wide variety of services.
            Yet all those services are only usable for the players on Steam. I don't want to tie my players to one specific platform.
            If I decided to go with Steam's inventory service I would have to reinvent the wheel multiple times for every platform I want to release my game on.
          </p>

          <h2 class="text-semi-bold text-xl mt-8">The economy service</h2>
          <p class="mt-2 text-grey-darkest">
            That's when we decided to focus on creating an inventory service. After a while, we renamed it to economy service.
            Simply because it's not just about items but also about virtual currencies and shops.
            wE want the economy service to be a developer centered tool, if the service lacks a feature a developer should be able to edit the service to get that feature in.
            A lot of closed source competitors don't allow this. So if their service lacks a feature you will have to work around it.
          </p>

          <p class="mt-8 text-grey-darkest">
            For the foreseeable future will put our efforts into creating the best economy service possible.
            Later on, we will branch into other services.
            You can expect more blog posts in the future.
            In the coming weeks, we will talk about the roadmap for the economy service.
          </p>

          <h2 class="text-semi-bold text-xl mt-8">The website now available online</h2>
          <p class="mt-2 text-grey-darkest">
            The last month we have been working hard to create this website.
            It is still miles away from being perfect.
            But for now, it serves its purpose.
            This website will function as a hub for development around GameComponent's services.
          </p>

          <div
            class="pt-16 uppercase text-xs font-bold text-grey-dark leading-normal"
          >WRITTEN ON APR 5, 2019</div>
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
          <social-share description="Game developers need better tooling"></social-share>
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
      title: "GameComponent - Game developers need better tooling"
    };
  }
}
</script>
