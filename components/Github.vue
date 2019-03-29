<style scoped>
.container--soft-shadow {
  box-shadow: 0 10px 32px 0 rgba(12,12,13,.05), 0 2px 16px 0 rgba(12,12,13,.01)
}

.background--dots {
  background-image: url('~assets/img/bg.svg');
  background-color: #d4d5d6;
  background-size: 100%;
}

.container--octocat {
  background-image: url('~assets/img/octocat.svg');
  background-size: 100px;
  background-repeat: no-repeat;
  background-position: 90% 70%;
}

@media (min-width: 992px) {
  .container--octocat {
    background-image: url('~assets/img/octocat.svg');
    background-size: 150px;
    background-repeat: no-repeat;
    background-position: 90% 50%;
  }
}

@media (min-width: 1200px) {
  .container--octocat {
    background-image: url('~assets/img/octocat.svg');
    background-size: 400px;
    background-repeat: no-repeat;
    background-position: 100% 50%;
  }
}
</style>

<template>
  <section class="background--dots p-4 py-16 md:p-32">
    <div class="relative container container--octocat container--soft-shadow mx-auto rounded-sm bg-grey-lighter p-4 md:p-16 ">
      <span class="uppercase text-xs font-bold text-grey-darker leading-normal" style="letter-spacing: 0.5px;">
        HELP US
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
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"

@Component
export default class Github extends Vue {}
</script>
