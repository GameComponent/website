<template>
  <footer class="bg-blue-darkest">
    <div class="container mx-auto p-8 py-16 md:p-16 md:py-32">
      <div>
        <img
          src="@/assets/img/logo-white.svg"
          alt="GAMECOMPONENT"
          class="w-64"
        />
      </div>

      <div class="mt-8 flex flex-col-reverse md:flex-row">
        <div class="pt-8 md:pt-0 w-full md:w-2/5">
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

        <div class="pt-8 md:pt-0 w-full md:w-1/5">
          <span class="uppercase text-xs font-bold text-grey-darker leading-normal" style="letter-spacing: 0.5px;">
            DOCUMENTATION
          </span>
          <ul class="list-reset text-white leading-normal mt-2">
            <li>
              <nuxt-link to="/developers/documentation" class="no-underline text-white hover:text-blue">
                Documentation
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/community" class="no-underline text-white hover:text-blue">
                Community
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/developers/webinars" class="no-underline text-white hover:text-blue">
                Webinars
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/jobs" class="no-underline text-white hover:text-blue">
                Jobs
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/partners" class="no-underline text-white hover:text-blue">
                Partners
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/enterprise" class="no-underline text-white hover:text-blue">
                Enterprise
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact" class="no-underline text-white hover:text-blue">
                Contact
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div class="pt-8 md:pt-0 w-full md:w-1/5">
          <span class="uppercase text-xs font-bold text-grey-darker leading-normal" style="letter-spacing: 0.5px;">
            SERVICE
          </span>
          <ul class="list-reset text-white leading-normal mt-2">
            <li>
              Economy service
            </li>
            <li>
              Pricing
            </li>
            <li>
              Hosted
            </li>
          </ul>
        </div>

        <div class="w-full md:w-1/5">
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
  Vue
} from "nuxt-property-decorator";

@Component
export default class Bottom extends Vue {}
</script>

