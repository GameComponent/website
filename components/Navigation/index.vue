<style scoped>
.header {
  position: absolute;
  height: 80px;
  left: 0;
  top: 0;
  width: 100%;
  padding: 0;
  text-align: center;
  background-color: transparent;
  z-index: 1;
}
.header__logo:hover {
  opacity: 0.75;
}

.navigation {
  display: none;
}
.dropdown {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.5em;
  box-shadow: inset 0 1px 0 #e6e6e6;
  z-index: 1;
}

.dropdown--open {
  display: block;
}

.dropdown__content {
  background: white;
  will-change: width, height, transform;
  text-align: left;
  transition: .15s;
}

.dropdown__items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown__item {
  width: 100%;
}

@media only screen and (min-width: 1000px) {
  .navigation {
    display: inline-block;
  }

  .navigation__item {
    display: inline-block;
    padding: 30px;
  }

  .dropdown {
    display: block;
    top: 58px;
    width: auto;
    padding: 0;
    box-shadow: none;
    background-color: transparent;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    will-change: transform;
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
    -webkit-transition: -webkit-transform 0.25s;
    transition: -webkit-transform 0.25s;
    transition: transform 0.25s;
    transition: transform 0.25s, -webkit-transform 0.25s;
  }

  .dropdown__content {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    will-change: transform, width, height;
    -webkit-transition: visibility 0.25s;
    transition: visibility 0.25s;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  }

  .dropdown__content::before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    right: auto;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    height: 0;
    width: 0;
    border: 8px solid transparent;
    border-bottom-color: #fff;
    opacity: 0;
    -webkit-transition: opacity 0.25s;
    transition: opacity 0.25s;
    overflow: hidden;
  }

  .dropdown__content--visible {
    visibility: visible;
    -webkit-transition: width 0.25s, height 0.25s, -webkit-transform 0.25s;
    transition: width 0.25s, height 0.25s, -webkit-transform 0.25s;
    transition: transform 0.25s, width 0.25s, height 0.25s;
    transition: transform 0.25s, width 0.25s, height 0.25s, -webkit-transform 0.25s;
  }
  .dropdown__content--visible::before {
    opacity: 1;
  }

  .dropdown__items {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  .dropdown__item {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    visibility: hidden;
    width: 100%;
    list-style: none;
    -webkit-transition: opacity 0.25s, visibility 0.25s;
    transition: opacity 0.25s, visibility 0.25s;
  }

  .dropdown__item--active {
    opacity: 1;
    visibility: visible;
  }

  .dropdown__item--services {
    width: 380px;
  }

  .dropdown__item--developers {
    width: 360px;
  }

  .dropdown__item--community {
    width: 250px;
  }
}
</style>

<template>
  <header
    class="header"
    :class="{
      'is-dropdown-visible': active !== '',
    }"
    @mouseleave="onMouseLeaveHeader"
  >
    <div class="container mx-auto px-8 lg:px-16 clearfix">
      <nuxt-link to="/" class="header__logo float-left">
        <img
          src="@/assets/img/logo.svg"
          alt="GAMECOMPONENT"
          class="navigation__logo w-64 py-4"
        />
      </nuxt-link>

      <hamburger
        :open="open"
        @click="onClickHamburger"
      />

      <nav class="navigation float-right">
        <ul>
          <li
            ref="firstItem"
            class="navigation__item has-dropdown"
            data-content="services"
            @mouseenter="onMouseEnterItem"
            @mouseleave="onMouseLeaveItem"
          >
            <nuxt-link
              to="/services"
              class="font-medium no-underline text-black hover:text-blue"
              :class="{ 'text-blue': active === 'services' }"
            >
              Services
            </nuxt-link>
          </li>

          <li
            class="navigation__item has-dropdown button"
            data-content="developers"
            @mouseenter="onMouseEnterItem"
            @mouseleave="onMouseLeaveItem"
          >
            <nuxt-link
              to="/developers"
              class="font-medium no-underline text-black hover:text-blue"
              :class="{ 'text-blue': active === 'developers' }"
            >
              Developers
            </nuxt-link>
          </li>

          <li
            class="navigation__item has-dropdown button"
            data-content="community"
            @mouseenter="onMouseEnterItem"
            @mouseleave="onMouseLeaveItem"
          >
            <nuxt-link
              to="/community"
              class="font-medium no-underline text-black hover:text-blue"
              :class="{ 'text-blue': active === 'community' }"
            >
              Community
            </nuxt-link>
          </li>

          <li
            class="navigation__item has-dropdown links"
            @mouseenter="onMouseEnterItem"
          >
            <nuxt-link
              to="/blog"
              class="font-medium no-underline text-black hover:text-blue"
            >
              Blog
            </nuxt-link>
          </li>
        </ul>
      </nav>

      <div
        ref="dropdown"
        class="dropdown"
        :class="{
          'dropdown--open': open,
        }"
        @mouseenter.prevent.stop
        @mouseleave.prevent.stop
      >
        <div
          class="dropdown__content rounded"
          :class="{ 'dropdown__content--visible': active !== '' }"
          :style="dropdownContentStyle"
        >
          <ul class="dropdown__items">
            <li
              id="services"
              class="dropdown__item dropdown__item--services"
              :class="{ 'dropdown__item--active': active === 'services' }"
            >
              <div class="content">
                <nuxt-link to="/services/economy-service" class="block clearfix p-4 hover:bg-grey-lighter rounded-t">
                  <div class="float-left">
                    <img
                      src="@/assets/icons/icon-currency-dollar.svg"
                      alt=""
                      class="bg-green-lighter p-3 rounded-full"
                      style="width: 48px; height: 48px"
                    >
                  </div>
                  <div class="float-left ml-4 mt-1">
                    <div class="font-bold text-black">Economy service</div>
                    <div class="text-xs text-grey-darker">Everything related to items, currencies and shops</div>
                  </div>
                </nuxt-link>

                <div class="bg-grey-lightest hover:bg-grey-lighter rounded-b hidden lg:block">
                  <a href="/services" class="text-center block p-4 text-grey-darker no-underline">
                    View all services
                  </a>
                </div>
              </div>
            </li>

            <li
              id="developers"
              class="dropdown__item dropdown__item--developers"
              :class="{ 'dropdown__item--active': active === 'developers' }"
            >
              <div class="content">
                <nuxt-link to="/developers/economy-service" class="block clearfix p-4 hover:bg-grey-lighter rounded-t">
                  <div class="float-left">
                    <img
                      src="@/assets/icons/icon-information.svg"
                      alt=""
                      class="bg-blue-lighter p-3 rounded-full"
                      style="width: 48px; height: 48px"
                    >
                  </div>
                  <div class="float-left ml-4 mt-1">
                    <div class="font-bold text-black">Documentation</div>
                    <div class="text-xs text-grey-darker">Specifications, documentation and examples</div>
                  </div>
                </nuxt-link>

                <div class="bg-grey-lightest hover:bg-grey-lighter hidden lg:block">
                  <a
                    href="https://github.com/GameComponent/economy-service/blob/master/api/proto/v1/economy-service.proto"
                    target="_blank"
                    class="block p-4 text-grey-darker no-underline"
                    style="padding-left: calc(2rem + 48px);"
                  >
                    GRPC API Specification
                    <img
                      src="@/assets/icons/icon-external-link.svg"
                      alt=""
                      class="align-middle w-3 h-3 inline-block"
                    >
                  </a>
                </div>

                <div class="bg-grey-lightest hover:bg-grey-lighter rounded-b hidden lg:block">
                  <a
                    href="https://generator.swagger.io/?url=https://raw.githubusercontent.com/GameComponent/economy-service/master/api/swagger/v1/economy-service.swagger.json"
                    target="_blank"
                    class="block p-4 text-grey-darker no-underline"
                    style="padding-left: calc(2rem + 48px);"
                  >
                    REST API Specification
                    <img
                      src="@/assets/icons/icon-external-link.svg"
                      alt=""
                      class="align-middle w-3 h-3 inline-block"
                    >
                  </a>
                </div>
              </div>
            </li>

            <li
              id="community"
              class="dropdown__item dropdown__item--community"
              :class="{ 'dropdown__item--active': active === 'community' }"
            >
              <div class="content">
                <div class="hover:bg-grey-lighter rounded-t">
                  <nuxt-link to="/community" class="block p-4 text-grey-darker no-underline">
                    <img src="@/assets/icons/icon-group.svg" alt="" class="align-bottom w-6 h-6" />
                    <span class="leading-normal ml-4">View all channels</span>
                  </nuxt-link>
                </div>

                <div class="bg-grey-lightest hover:bg-grey-lighter rounded-t">
                  <a href="https://discord.gg/CPmb5N5" target="_blank" class="block p-4 text-grey-darker no-underline">
                    <img src="@/assets/social_icons/discord_dark.svg" alt="github" class="align-bottom w-6 h-6" />
                    <span class="leading-normal ml-4">
                      Discord
                      <img
                        src="@/assets/icons/icon-external-link.svg"
                        alt=""
                        class="align-middle w-3 h-3 inline-block"
                      >
                    </span>
                  </a>
                </div>

                <div class="bg-grey-lightest hover:bg-grey-lighter">
                  <a href="https://twitter.com/GameComponentHQ" class="block p-4 text-grey-darker no-underline">
                    <img src="@/assets/social_icons/twitter_dark.svg" alt="github" class="align-bottom w-6 h-6" />
                    <span class="leading-normal ml-4">
                      Twitter
                      <img
                        src="@/assets/icons/icon-external-link.svg"
                        alt=""
                        class="align-middle w-3 h-3 inline-block"
                      >
                      </span>
                  </a>
                </div>

                <div class="bg-grey-lightest hover:bg-grey-lighter rounded-b">
                  <a href="https://github.com/GameComponent/economy-service" target="_blank" class="block p-4 text-grey-darker no-underline">
                    <img src="@/assets/social_icons/github_dark.svg" alt="github" class="align-bottom w-6 h-6" />
                    <span class="leading-normal ml-4">
                      Become a contributor
                      <img
                        src="@/assets/icons/icon-external-link.svg"
                        alt=""
                        class="align-middle w-3 h-3 inline-block"
                      >
                    </span>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Watch,
} from "nuxt-property-decorator"
import Hamburger from "./components/Hamburger.vue"

@Component({
  components: {
    Hamburger,
  },
})
export default class Navigation extends Vue {
  open: Boolean = false;

  active: String = '';

  dropdownContentStyle: Object = {
    width: '',
    height: '',
    transform: '',
  };

  public mounted() {
    this.updateDropdown(this.$refs.firstItem);
  }

  public onMouseLeaveHeader() {
    this.hideDropdown();
  }

  public onMouseEnterItem(e) {
    this.showDropdown(e.target);
  }

  public onMouseLeaveItem(e) {
    if (this.active === '') {
      this.hideDropdown();
    }
  }

  public onClickHamburger() {
    this.reset();
    this.open = !this.open;
  }

  public showDropdown(selectedItem) {
    this.updateDropdown(selectedItem);
    this.active = selectedItem.dataset.content;
  }

  public hideDropdown() {
    this.active = '';
    this.dropdownContentStyle = {
      ...this.dropdownContentStyle,
      height: '0px',
      opacity: 0,
    }
    this.open = false;
  }

  public updateDropdown(selectedItem) {
    const selectedDropdown: Element | null = (<Element>this.$refs.dropdown).querySelector(
      `#${selectedItem.dataset.content}`
    );

    if (!selectedDropdown) {
      this.hideDropdown();


      return;
    }

    const height = selectedDropdown ? selectedDropdown.clientHeight : 0;
    const childNodes: any = selectedDropdown ? selectedDropdown.childNodes : [];
    const elements: any = (selectedDropdown ? [...childNodes] : []);

    const content = elements.find((item) => {
      if (!item) return false;
      if (!item.classList) return false;
      return item.classList.contains("content");
    });
    const width = content ? (<Element>content).clientWidth : 0;
    const left = selectedItem.offsetLeft + (selectedItem.clientWidth / 2) - (width / 2);

    this.dropdownContentStyle = {
      width: `${width}px`,
      height: `${height}px`,
      transform: `translateX(${left}px)`,
    };
  }

  public reset() {
    this.dropdownContentStyle = {
      width: '',
      height: '',
      transform: '',
    };
  }

  @Watch('$route')
  onRouteChange(newRoute, oldRoute) {
    if (newRoute.hash === '#0' && oldRoute.hash === '') return;

    this.open = false;
    this.active = '';
  }
};
</script>
