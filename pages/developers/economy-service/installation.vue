<style scoped>
  .background--light-green {
    background-image: linear-gradient(90deg, #eef5eb, #cbfdcb)
  }

  .container--first {
    margin-top: -4rem;
  }

  .button--shadow {
    box-shadow: 0 10px 32px 0 rgba(12, 12, 13, .05), 0 2px 16px 0 rgba(12, 12, 13, .01)
  }
</style>

<template>
  <div>
    <section class="background--light-green">
      <div class="container container--top-spacer mx-auto pt-32 pb-8 px-16"></div>
    </section>

    <section>
      <div class="container container--first bg-white mx-auto rounded clearfix mb-16">
        <!-- Breadcrumbs -->
        <div class="h-12 py-6 px-8 lg:px-16 uppercase text-xs font-bold text-grey-dark leading-normal">
          <span style="letter-spacing: 0.5px;">
            <nuxt-link to="/developers" class="no-underline text-grey-dark hover:text-blue cursor-pointer">
              DEVELOPERS
            </nuxt-link>
          </span>
          <span class="mx-2" style="letter-spacing: 0.5px;">
            &rarr;
          </span>
          <span style="letter-spacing: 0.5px;">
            <nuxt-link to="/developers/economy-service" class="no-underline text-grey-dark hover:text-blue cursor-pointer">
              ECONOMY SERVICE
            </nuxt-link>
          </span>
          <span class="mx-2" style="letter-spacing: 0.5px;">
            &rarr;
          </span>
          <span style="letter-spacing: 0.5px;">
            INSTALLATION
          </span>
        </div>

        <div class="pt-16 pb-32 px-8 lg:px-16">
          <div class="pb-16">
            <div class="uppercase text-xs font-bold text-grey-darker leading-normal" style="letter-spacing: 0.5px;">
              <div
                class="w-2 h-2 rounded-full inline-block v-mid"
                style="background: #38c172;"
              ></div>
              <span class="ml-1">GUIDE</span>
            </div>
            <h2 class="text-black text-4xl" style="letter-spacing: 0.5px;">
              Economy service installation guide
            </h2>
            <p class="text-grey-darker mt-4 text-xl leading-normal" style="letter-spacing: 0.5px;">
              At the moment we do not provide a helm chart to easily run on Kubernetes. We will provide this once the service reaches more maturity.
            </p>

            <div class="mt-8 bg-red-light rounded text-white p-8">
              <div class="font-semibold text-xl">Warning!</div>
              <div class="mt-2">
                At the moment this project is in active development.
                Do not use it in a production environment.
              </div>
            </div>

            <div class="mt-8 bg-grey-lighter rounded text-black p-8">
              <div class="mt-4">
                If you are interested follow our Twitter to stay updated.
              </div>

              <div class="mt-2">
                <a
                  href="https://twitter.com/GameComponentHQ?ref_src=twsrc%5Etfw"
                  class="twitter-follow-button"
                  data-size="large"
                  data-show-count="false"
                  data-show-screen-name="false"
                ></a>
                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
              </div>
            </div>

            <div class="uppercase text-xs font-bold text-grey-darker leading-normal mt-8" style="letter-spacing: 0.5px;">
              INSTALLING THE SERVICE
            </div>
            <p class="text-grey-darker mt-4 text-xl leading-normal" style="letter-spacing: 0.5px;">
              Clone the <a href="https://github.com/GameComponent/economy-service" class="no-underline text-blue">service repository</a>.
              Install all the GO dependecies.
              Navigate to the <pre class="inline-block bg-grey-light rounded px-2">/cmd/server</pre> folder.
              Do a <pre class="inline-block bg-grey-light rounded px-2">go build</pre> command here.
              If the go build command throws errors try to resolve those errors. Most likely those errors are caused by missing grpc dependencies.
              Once the <pre class="inline-block bg-grey-light rounded px-2">go build</pre> succeeds run the output binary.
              The binary should output all available launch parameters.
            </p>

            <div class="uppercase text-xs font-bold text-grey-darker leading-normal mt-8" style="letter-spacing: 0.5px;">
              INSTALLING THE WEBCLIENT
            </div>
            <p class="text-grey-darker mt-4 text-xl leading-normal" style="letter-spacing: 0.5px;">
              Clone the <a href="https://github.com/GameComponent/economy-webclient" class="no-underline text-blue">webclient repository</a>.
              Run <pre class="inline-block bg-grey-light rounded px-2">npm install</pre>.
              Run <pre class="inline-block bg-grey-light rounded px-2">npm run serve</pre>.
              Make sure all <pre class="inline-block bg-grey-light rounded px-2">ENVIRONMENT VARIABLES</pre> are set correctly so the webclient connects to the correct service.
            </p>
          </div>

          <div>
            <!-- Service -->
            <div class="w-full border border-grey rounded-sm button--shadow mt-8">
              <div class="p-16">

                <h2 class="text-black text-3xl leading-tight md:mt-4">
                  Service repository
                </h2>
                <p class="text-grey-darker leading-normal mt-4">
                  Check out the GitHub repository.
                </p>
                <div class="mt-8">
                  <a
                    href="https://github.com/GameComponent/economy-service"
                    class="inline-block py-4 px-6 rounded-sm bg-grey-darker text-white no-underline font-medium text-sm"
                    style="letter-spacing: 0.3px;"
                  >
                    Check it out
                  </a>
                </div>
              </div>
            </div>

            <!-- Webclient -->
            <div class="w-full border border-grey rounded-sm button--shadow mt-8">
              <div class="p-16">

                <h2 class="text-black text-3xl leading-tight md:mt-4">
                  Webclient repository
                </h2>
                <p class="text-grey-darker leading-normal mt-4">
                  Check out the GitHub repository.
                </p>
                <div class="mt-8">
                  <a
                    href="https://github.com/GameComponent/economy-webclient"
                    class="inline-block py-4 px-6 rounded-sm bg-grey-darker text-white no-underline font-medium text-sm"
                    style="letter-spacing: 0.3px;"
                  >
                    Check it out
                  </a>
                </div>
              </div>
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
export default class DevelopersEconomyInstallation extends Vue {
  public head () {
    return {
      title: 'GameComponent - Economy service installation'
    };
  }
}
</script>
