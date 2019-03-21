<template>
  <footer class="bg-blue-darkest">
    <div class="container mx-auto p-8 py-32">
      <div>
        <img
          src="@/assets/img/logo-white.svg"
          alt="GAMECOMPONENT"
          class="w-64"
        />
      </div>

      <div class="flex mt-8">
        <div class="flex-1">
          <div>
            <span class="uppercase text-xs font-bold text-grey-darker leading-normal" style="letter-spacing: 0.5px;">
              SOCIAL MEDIA
            </span>
            <div class="clearfix mt-3">
              <div class="float-left">
                <a
                  href="https://twitter.com/GameComponentHQ"
                  class="p-1 w-10 h-10 bg-black flex items-center justify-center rounded bg-blue-darker hover:bg-blue"
                >
                  <img src="@/assets/social_icons/twitter.svg" alt="twitter" class="w-6 h-6" />
                </a>
              </div>

              <div class="float-left ml-2">
                <a
                  href="https://www.linkedin.com/company/gamecomponent"
                  class="p-1 w-10 h-10 bg-black flex items-center justify-center rounded bg-blue-darker hover:bg-blue"
                >
                  <img src="@/assets/social_icons/linkedin.svg" alt="linkedin" class="w-6 h-6" />
                </a>
              </div>

              <div class="float-left ml-2">
                <a
                  href="https://github.com/GameComponent"
                  class="p-1 w-10 h-10 bg-black flex items-center justify-center rounded bg-blue-darker hover:bg-blue"
                >
                  <img src="@/assets/social_icons/github.svg" alt="github" class="w-6 h-6" />
                </a>
              </div>

              <div class="float-left ml-2">
                <a
                  href="https://discord.gg/CPmb5N5"
                  class="p-1 w-10 h-10 bg-black flex items-center justify-center rounded bg-blue-darker hover:bg-blue"
                >
                  <img src="@/assets/social_icons/discord.svg" alt="github" class="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <span class="uppercase text-xs font-bold text-grey-darker leading-normal" style="letter-spacing: 0.5px;">
              GITHUB
            </span>
            <ul class="list-reset text-white leading-normal mt-2">
              <li>
                <div>
                  <gh-btns-star
                    slug="GameComponent/economy-service"
                    style="float: none; margin: 0;"
                  />
                </div>
              </li>
              <li>
                <div>
                  <gh-btns-watch
                    slug="GameComponent/economy-service"
                    style="float: none; margin: 0;"
                  />
                </div>
              </li>
            </ul>
          </div>

          <div class="mt-8">
            <span class="text-xs font-bold text-grey-darker leading-normal" style="letter-spacing: 0.5px;">
              MADE WITH <span class="text-red">&#10084;</span> IN GRONINGEN
            </span>
          </div>
        </div>

        <div class="flex-1">
          <span class="uppercase text-xs font-bold text-grey-darker leading-normal" style="letter-spacing: 0.5px;">
            DOCUMENTATION
          </span>
          <ul class="list-reset text-white leading-normal mt-2">
            <li>Documentation</li>
            <li>Community</li>
            <li>Webinars</li>
            <li>Jobs</li>
            <li>Partners</li>
            <li>Enterprise</li>
            <li>Contact</li>
          </ul>
        </div>

        <div class="flex-1">
          <span class="uppercase text-xs font-bold text-grey-darker leading-normal" style="letter-spacing: 0.5px;">
            SERVICE
          </span>
          <ul class="list-reset text-white leading-normal mt-2">
            <li>Economy service</li>
            <li>Pricing</li>
            <li>Hosted</li>
          </ul>
        </div>

        <div class="flex-1">
          <span class="uppercase text-xs font-bold text-grey-darker leading-normal" style="letter-spacing: 0.5px;">
            LEGAL
          </span>

          <ul class="list-reset text-white leading-normal mt-2">
            <li>Terms of serivce</li>
            <li>Privacy</li>
            <li>GDPR</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator";

@Component
export default class Bottom extends Vue {}
</script>

