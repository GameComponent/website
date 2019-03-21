<style scoped>
  .navigation {
    height: 70px;
  }

  .navigation--filled {
    background-color: #FFF;
    border-bottom: 1px solid #EEE;
  }

  .navigation--filled2 {
    background-color: #D4D5D6;
    border-bottom: 1px solid #cecfd0;
  }

  .navigation__logo {
    max-height: 70px;
  }
</style>

<template>
  <nav
    class="navigation background--grid"
  >
    <div class="container mx-auto clearfix px-8">
      <nuxt-link
        to="/"
      >
        <img
          src="@/assets/img/logo.svg"
          alt="GAMECOMPONENT"
          class="navigation__logo w-64 py-4"
        />
      </nuxt-link>

      <ul class="list-reset float-right font-medium py-6">
        <li class="inline-block ml-8">
          <nuxt-link
            to="/"
            class="no-underline text-black hover:text-blue"
            activeClass="text-blue"
            exact
          >
            Home
          </nuxt-link>
        </li>
        <li class="inline-block ml-8">
          <nuxt-link
            to="/services"
            class="no-underline text-black hover:text-blue"
            activeClass="text-blue"
          >
            Service
          </nuxt-link>
        </li>
        <li class="inline-block ml-8">
          <nuxt-link
            to="/docs"
            class="no-underline text-black hover:text-blue"
            activeClass="text-blue"
          >
            Docs
          </nuxt-link>
        </li>
        <li class="inline-block ml-8">
          <nuxt-link
            to="/community"
            class="no-underline text-black hover:text-blue"
            activeClass="text-blue"
          >
            Community
          </nuxt-link>
        </li>
        <li class="inline-block ml-8">
          <nuxt-link
            to="/blog"
            class="no-underline text-black hover:text-blue"
            activeClass="text-blue"
          >
            Blog
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"

@Component
export default class Navigation extends Vue {}
</script>

