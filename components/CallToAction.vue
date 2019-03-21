<template>
  <section>
    <div class="text-center mx-auto" style="max-width: 400px">
      <h2 class="text-black text-4xl" style="letter-spacing: 0.5px;">
        Let's get started
      </h2>
      <p class="text-grey-darker mt-2 text-xl leading-normal" style="letter-spacing: 0.5px;">
        Be up and running in minutes.
      </p>
      <div class="mt-8">
        <a
          href="https://github.com/GameComponent/economy-service"
          class="inline-block py-4 px-6 rounded-sm bg-blue text-white no-underline font-medium text-sm"
          style="letter-spacing: 0.3px;"
        >
          Install the service
        </a>
        <a
          href="https://github.com/GameComponent/economy-webclient"
          class="inline-block ml-4 py-4 px-6 rounded-sm bg-grey-darker text-white no-underline font-medium text-sm"
          style="letter-spacing: 0.3px;"
        >
          Install the webclient
        </a>
      </div>
    </div>
  </section>
</template>

</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"

@Component
export default class CallToAction extends Vue {}
</script>

