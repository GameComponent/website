<template>
  <section class="py-16 md:py-32 md:flex md:justify-center md:items-center md:text-center">
    <div class="container mx-auto px-8">
      <h2 class="text-black text-4xl" style="letter-spacing: 0.5px;">
        Let's get started
      </h2>
      <p class="text-grey-darker mt-2 text-xl leading-normal" style="letter-spacing: 0.5px;">
        Checkout the source repository.
      </p>
      <div class="mt-8">
        <div class="md:inline-block">
          <a
            href="https://github.com/GameComponent/economy-service"
            class="inline-block py-4 px-6 rounded-sm bg-blue text-white no-underline font-medium text-sm hover:bg-blue-light"
            style="letter-spacing: 0.3px;"
          >
            Checkout the service
          </a>
        </div>

        <div class="mt-2 md:mt-0 md:ml-4 md:inline-block">
          <a
            href="https://github.com/GameComponent/economy-webclient"
            class="inline-block py-4 px-6 rounded-sm bg-grey-darker text-white no-underline font-medium text-sm hover:bg-grey-dark"
            style="letter-spacing: 0.3px;"
          >
            Checkout the webclient
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"

@Component
export default class CallToAction extends Vue {}
</script>

