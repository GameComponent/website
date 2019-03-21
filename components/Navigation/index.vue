<style scoped>
.header {
  position: relative;
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
  border-radius: 5px;
  background: white;
  will-change: width, height, transform;
}

.dropdown__content>ul>li {
  margin-bottom: 3.3em;
}

@media only screen and (min-width: 1000px) {
  .header {
    position: absolute;
    height: 80px;
    left: 0;
    top: 0;
    width: 100%;
    padding: 0;
    text-align: center;
    background-color: transparent;
  }

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
  }
  .header .dropdown__content>ul {
    position: relative;
    z-index: 1;
    height: 100%;
    width: 100%;
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
  .dropdown__item {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    visibility: hidden;
    width: 100%;
    -webkit-transition: opacity 0.25s, visibility 0.25s;
    transition: opacity 0.25s, visibility 0.25s;
  }
  .dropdown__item--active {
    opacity: 1;
    visibility: visible;
  }
  .header .label {
    display: none;
  }
  .header .content {
    -webkit-transition: -webkit-transform 0.25s;
    transition: -webkit-transform 0.25s;
    transition: transform 0.25s;
    transition: transform 0.25s, -webkit-transform 0.25s;
    text-align: left;
  }
  .header .content>ul::after {
    clear: both;
    content: '';
    display: block;
  }
  .header .content>ul>li {
    width: 48%;
    float: left;
    margin-right: 4%;
    margin-top: 0;
  }
  .header .content>ul>li:nth-of-type(2n) {
    margin-right: 0;
  }

  .header .links .content>ul>li {
    margin-top: 0;
  }
  .header .links .content, .header .button .content {
    width: 390px;
  }
  .header .links-list a {
    font-size: 1rem;
    margin-left: 0;
  }
}
</style>

<template>
  <header
    class="header"
    :class="{
      'is-dropdown-visible': active !== '',
    }"
    @mouseleave="handleMouseLeaveHeader"
  >
    <div class="container mx-auto px-8 clearfix">
      <nuxt-link to="/" class="header__logo float-left">
        <img
          src="@/assets/img/logo.svg"
          alt="GAMECOMPONENT"
          class="navigation__logo w-64 py-4"
        />
      </nuxt-link>

      <hamburger
        :open="open"
        @click="handleClickHamburger"
      />

      <nav class="navigation float-right">
        <ul>
          <li
            class="navigation__item has-dropdown"
            data-content="services"
            @mouseenter="handleMouseEnterItem"
            @mouseleave="handleMouseLeaveItem"
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
            @mouseenter="handleMouseEnterItem"
            @mouseleave="handleMouseLeaveItem"
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
            @mouseenter="handleMouseEnterItem"
            @mouseleave="handleMouseLeaveItem"
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
        @mouseenter.prevent.stop="handleDropdownMouseEnter"
        @mouseleave.prevent.stop="handleDropdownMouseLeave"
      >
        <div
          class="dropdown__content"
          :class="{ 'dropdown__content--visible': active !== '' }"
          :style="dropdownContentStyle"
        >
          <ul>
            <li
              id="services"
              class="dropdown__item gallery"
              :class="{ 'dropdown__item--active': active === 'services' }"
            >
              <div class="content p-4">
                <div class="clearfix">
                  <div class="float-left">
                    <img
                      src="@/assets/icons/icon-external-link.svg"
                      alt=""
                      class="bg-green-lighter p-3 rounded-full"
                      style="width: 48px; height: 48px"
                    >
                  </div>
                  <div class="float-left ml-4">
                    <div class="font-bold">Economy service</div>
                    <div class="text-xs">Everything related to items, currencies and shops</div>
                  </div>
                </div>
              </div>
            </li>

            <li
              id="developers"
              class="dropdown__item links"
              :class="{ 'dropdown__item--active': active === 'developers' }"
            >
              <a href="#0" class="label">Pricing</a>
              <div class="content">
                <ul>
                  <li>
                    <h2>Services</h2>
                    <ul class="links-list">
                      <li><a href="#0">Logo Design</a></li>
                      <li><a href="#0">Branding</a></li>
                      <li><a href="#0">Web Design</a></li>
                      <li><a href="#0">iOS</a></li>
                      <li><a href="#0">Android</a></li>
                      <li><a href="#0">HTML/CSS/JS</a></li>
                      <li><a href="#0">Packaging</a></li>
                      <li><a href="#0">Mobile</a></li>
                      <li><a href="#0">UI/UX</a></li>
                      <li><a href="#0">Prototyping</a></li>
                    </ul>
                  </li>
                  <li>
                    <h2>Projects</h2>
                    <ul class="links-list">
                      <li><a href="#0">Logo Design</a></li>
                      <li><a href="#0">Branding</a></li>
                      <li><a href="#0">Web Design</a></li>
                      <li><a href="#0">iOS</a></li>
                      <li><a href="#0">Android</a></li>
                      <li><a href="#0">HTML/CSS/JS</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>

            <li
              id="community"
              class="dropdown__item button"
              :class="{ 'dropdown__item--active': active === 'community' }"
            >
              <a href="#0" class="label">Contact</a>
              <div class="content">
                <ul class="links-list">
                  <li><a href="#0">Link #1</a></li>
                  <li><a href="#0">Link #2</a></li>
                  <li><a href="#0">Link #3</a></li>
                  <li><a href="#0">Link #4</a></li>
                  <li><a href="#0">Link #5</a></li>
                  <li><a href="#0">Link #6</a></li>
                  <li><a href="#0">Link #1</a></li>
                  <li><a href="#0">Link #2</a></li>
                  <li><a href="#0">Link #3</a></li>
                  <li><a href="#0">Link #4</a></li>
                  <li><a href="#0">Link #5</a></li>
                  <li><a href="#0">Link #6</a></li>
                  <li><a href="#0">Link #1</a></li>
                  <li><a href="#0">Link #2</a></li>
                  <li><a href="#0">Link #3</a></li>
                  <li><a href="#0">Link #4</a></li>
                  <li><a href="#0">Link #5</a></li>
                  <li><a href="#0">Link #6</a></li>
                  <li><a href="#0">Link #1</a></li>
                  <li><a href="#0">Link #2</a></li>
                  <li><a href="#0">Link #3</a></li>
                  <li><a href="#0">Link #4</a></li>
                  <li><a href="#0">Link #5</a></li>
                  <li><a href="#0">Link #6</a></li>
                  <li><a href="#0">Link #1</a></li>
                  <li><a href="#0">Link #2</a></li>
                  <li><a href="#0">Link #3</a></li>
                  <li><a href="#0">Link #4</a></li>
                  <li><a href="#0">Link #5</a></li>
                  <li><a href="#0">Link #6</a></li>
                  <li><a href="#0">Link #1</a></li>
                  <li><a href="#0">Link #2</a></li>
                  <li><a href="#0">Link #3</a></li>
                  <li><a href="#0">Link #4</a></li>
                  <li><a href="#0">Link #5</a></li>
                  <li><a href="#0">Link #6</a></li>
                  <li><a href="#0">Link #1</a></li>
                  <li><a href="#0">Link #2</a></li>
                  <li><a href="#0">Link #3</a></li>
                  <li><a href="#0">Link #4</a></li>
                  <li><a href="#0">Link #5</a></li>
                  <li><a href="#0">Link #6</a></li>
                  <li><a href="#0">Link #1</a></li>
                  <li><a href="#0">Link #2</a></li>
                  <li><a href="#0">Link #3</a></li>
                  <li><a href="#0">Link #4</a></li>
                  <li><a href="#0">Link #5</a></li>
                  <li><a href="#0">Link #6</a></li>
                </ul>
                <a href="#0">Get in Touch</a>
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
  Prop,
  Vue
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
    transform: 'translateX(100%)',
  };

  handleMouseLeaveHeader() {
    console.log('handleMouseLeaveHeader');
    this.hideDropdown();
  }

  handleMouseEnterItem(e) {
    console.log('handleMouseEnterItem');
    this.showDropdown(e.target);
  }

  handleMouseLeaveItem(e) {
    console.log('handleMouseLeaveItem', e);
    if (this.active === '') {
      this.hideDropdown();
    }
  }

  handleDropdownMouseLeave() {
    console.log('handleDropdownMouseLeave');
  }

  handleDropdownMouseEnter() {
    console.log('handleDropdownMouseEnter');
  }

  public handleClickHamburger() {
    this.reset();
    this.open = !this.open;
  }

  public showDropdown(item) {
    const selectedDropdown: Element | null = (<Element>this.$refs.dropdown).querySelector(
      `#${item.dataset.content}`
    );
    const selectedDropdownHeight = selectedDropdown ? selectedDropdown.clientHeight : 0;
    const childNodes = selectedDropdown ? selectedDropdown.childNodes : [];
    const content = Array.from(childNodes)
      .find((item: Element) => {
        if (!item) return false;
        if (!item.classList) return false;
        return item.classList.contains("content");
      });
    const selectedDropdownWidth = content ? (<Element>content).clientWidth : 0;
    const selectedDropdownLeft =
      item.offsetLeft + item.clientWidth / 2 - selectedDropdownWidth / 2;
    this.updateDropdown(
      selectedDropdown,
      selectedDropdownHeight,
      selectedDropdownWidth,
      selectedDropdownLeft,
    );

    this.active = item.dataset.content;
  }

  public hideDropdown() {
    this.active = '';
  }

  public updateDropdown(dropdownItem, height, width, left) {
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
};
</script>
