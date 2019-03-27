<template>
  <section class="text-center">
    <div class="container mx-auto">
      <span class="uppercase text-xs font-bold text-grey-darker leading-normal" style="letter-spacing: 0.5px;">
        EASILY INTEGRATES WITH
      </span>

      <div class="mt-8">
        <a href="https://www.unrealengine.com">
          <img
            src="~assets/img/engines/unreal.svg"
            alt="Unreal"
            class="w-64 h-32"
          />
        </a>
        <a href="https://unity.com/">
          <img
            src="~assets/img/engines/unity.svg"
            alt="Unity"
            class="w-64 h-32 ml-8"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"

@Component
export default class Integrates extends Vue {}
</script>
