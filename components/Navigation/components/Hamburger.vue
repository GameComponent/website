<style scoped>

/* Hamburger button */
.hamburger {
  position: absolute;
  top: 0;
  right: 0;
  height: 60px;
  width: 60px;
  overflow: hidden;
  text-indent: 100%;
  white-space: nowrap;
  color: transparent;
  z-index: 2;
}
.hamburger__icon,
.hamburger__icon::after,
.hamburger__icon::before {
  position: absolute;
  background-color: #1a1a1a;
  height: 3px;
  width: 26px;
}
.hamburger__icon {
  left: 50%;
  top: 50%;
  bottom: auto;
  right: auto;
  -webkit-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;
}
.hamburger__icon::after,
.hamburger__icon::before {
  content: '';
  left: 0;
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}
.hamburger__icon::before {
  -webkit-transform: translateY(-9px);
  -ms-transform: translateY(-9px);
  transform: translateY(-9px);
}
.hamburger__icon::after {
  -webkit-transform: translateY(9px);
  -ms-transform: translateY(9px);
  transform: translateY(9px);
}

.hamburger__icon--open {
  background-color: transparent;
}
.hamburger__icon--open::before {
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.hamburger__icon--open::after {
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

@media only screen and (min-width: 1000px) {
  .hamburger {
    display: none;
  }
}
</style>

<template>
  <a
    href="#0"
    class="hamburger"
    @click="$emit('click')"
  >
    <span
      class="hamburger__icon"
      :class="{
        'hamburger__icon--open': open,
      }"
    ></span>
  </a>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"

@Component({
  props: {
    open: Boolean
  }
})
export default class Hamburger extends Vue {}
</script>
