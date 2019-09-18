<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import SocialShare from '~/components/SocialShare.vue';

@Component({
  components: {
    SocialShare,
  },
})
export default class BlogItem extends Vue {
  public head () {
    return {
      title: 'GameComponent - Kubernetes the platform for modern multiplayer games'
    };
  }
}
</script>
