<style>
.xl__wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
}

#xl_auth {
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div class="xl__wrapper">
    <div class="container text-left" style="max-width: 600px;">
      <h1 class="text-4xl">Under construction</h1>
      <p class="mt-8 leading-normal">
        Currently the dashboard is in active development. We will keep you updated.
        To get access to a hosted solution contact
        <a
          class="no-underline text-blue-dark hover:text-blue"
          href="mailto:info@gamecomponent.com"
        >info@gamecomponent.com</a>.
      </p>
      <p class="mt-4">
        You can also make use of the self hosted version of the
        <nuxt-link
          to="/services/economy-service"
          class="no-underline text-blue-dark hover:text-blue"
        >Economy Service</nuxt-link>.
        Checkout the
        <nuxt-link
          to="/developers/economy-service/installation"
          class="no-underline text-blue-dark hover:text-blue"
        >installation guide</nuxt-link>.
      </p>
      <p class="mt-8">
        <nuxt-link
          to="/contact"
          class="inline-block no-underline p-3 rounded text-white bg-blue-dark hover:bg-blue"
        >Go to contact page</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

declare var XL: any;

@Component
export default class Dashboard extends Vue {
  public layout() {
    return "dashboard";
  }

  public mounted() {}

  public head() {
    return {
      title: "GameComponent - Dashboard"
    };
  }
}
</script>
