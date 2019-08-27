<style>
.xl__wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f8f8f8;
}

#xl_auth {
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div class="xl__wrapper">
    <div>
      <img src="@/assets/img/logo.svg" alt="GAMECOMPONENT" class="navigation__logo w-64 py-4" />
      <div id="xl_auth"></div>
      <nuxt-link to="/" class="link no-underline text-black hover:text-blue">Back to website</nuxt-link>
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

  public mounted() {
    /* eslint-disable */
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://cdn.xsolla.net/xsolla-login-widget/sdk/2.2.3/xl.min.js";
    s.addEventListener(
      "load",
      function() {
        XL.init({
          projectId: "f495124c-c84d-11e9-9244-42010aa80004",
          callbackUrl: `${window.location.origin}/dashboard/callback`,
          locale: "en_XX"
        });

        const element_id = "xl_auth";
        const options = {
          width: 550,
          height: 550,
          route: XL.ROUTES.REGISTRATION
        };

        XL.AuthWidget(element_id, options);
      },
      false
    );
    /* eslint-enable */
  }

  public head() {
    return {
      title: "GameComponent - Register"
    };
  }
}
</script>
