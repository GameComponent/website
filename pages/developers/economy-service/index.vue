<style scoped>
.background--light-green {
  background-image: linear-gradient(90deg, #eef5eb, #cbfdcb);
}

.container--first {
  margin-top: -4rem;
}

.button--shadow {
  box-shadow: 0 10px 32px 0 rgba(12, 12, 13, 0.05),
    0 2px 16px 0 rgba(12, 12, 13, 0.01);
}
</style>

<template>
  <div>
    <section class="background--light-green">
      <div class="container container--top-spacer mx-auto pt-32 pb-8 px-16"></div>
    </section>

    <section>
      <div class="container container--first bg-white mx-auto rounded clearfix mb-16">
        <!-- Breadcrumbs -->
        <div
          class="h-12 py-6 px-8 lg:px-16 uppercase text-xs font-bold text-grey-dark leading-normal"
        >
          <span style="letter-spacing: 0.5px;">
            <nuxt-link
              to="/developers"
              class="no-underline text-grey-dark hover:text-blue cursor-pointer"
            >DEVELOPERS</nuxt-link>
          </span>
          <span class="mx-2" style="letter-spacing: 0.5px;">&rarr;</span>
          <span style="letter-spacing: 0.5px;">ECONOMY SERVICE</span>
        </div>

        <div class="pt-16 pb-32 px-8 lg:px-16">
          <div class="pb-16">
            <div
              class="uppercase text-xs font-bold text-grey-darker leading-normal"
              style="letter-spacing: 0.5px;"
            >
              <div class="w-2 h-2 rounded-full inline-block v-mid" style="background: #38c172;"></div>
              <span class="ml-1">SERVICE</span>
            </div>
            <h2 class="text-black text-4xl" style="letter-spacing: 0.5px;">Economy service</h2>
            <p
              class="text-grey-darker mt-4 text-xl leading-normal"
              style="letter-spacing: 0.5px;"
            >Better documentation is in the making. Tutorials, examples will follow soon. As of right now you can view the specification.</p>
          </div>

          <div>
            <!-- Installation guide -->
            <div class="w-full border border-grey rounded-sm button--shadow mt-8">
              <div class="p-16">
                <h2 class="text-black text-3xl leading-tight">Installation guide</h2>
                <p
                  class="text-grey-darker leading-normal mt-4"
                >Follow these instructions to run the service on your own metal.</p>
                <div class="mt-8">
                  <nuxt-link
                    to="/developers/economy-service/installation"
                    class="inline-block py-4 px-6 rounded-sm bg-grey-darker text-white no-underline font-medium text-sm"
                    style="letter-spacing: 0.3px;"
                  >Check it out</nuxt-link>
                </div>
              </div>
            </div>
            <!-- Service -->
            <div class="w-full border border-grey rounded-sm button--shadow mt-8">
              <div class="p-16">
                <h2 class="text-black text-3xl leading-tight">Service repository</h2>
                <p class="text-grey-darker leading-normal mt-4">Check out the GitHub repository.</p>
                <div class="mt-8">
                  <a
                    href="https://github.com/GameComponent/economy-service"
                    class="inline-block py-4 px-6 rounded-sm bg-grey-darker text-white no-underline font-medium text-sm"
                    style="letter-spacing: 0.3px;"
                  >Check it out</a>
                </div>
              </div>
            </div>

            <!-- Webclient -->
            <div class="w-full border border-grey rounded-sm button--shadow mt-8">
              <div class="p-16">
                <h2 class="text-black text-3xl leading-tight">Webclient repository</h2>
                <p class="text-grey-darker leading-normal mt-4">Check out the GitHub repository.</p>
                <div class="mt-8">
                  <a
                    href="https://github.com/GameComponent/economy-webclient"
                    class="inline-block py-4 px-6 rounded-sm bg-grey-darker text-white no-underline font-medium text-sm"
                    style="letter-spacing: 0.3px;"
                  >Check it out</a>
                </div>
              </div>
            </div>

            <!-- REST -->
            <div class="w-full border border-grey rounded-sm button--shadow mt-8">
              <div class="p-16">
                <h2 class="text-black text-3xl leading-tight">REST API</h2>
                <p
                  class="text-grey-darker leading-normal mt-4"
                >Check out the OpenAPI/Swagger documentation.</p>
                <div class="mt-8">
                  <a
                    href="https://generator.swagger.io/?url=https://raw.githubusercontent.com/GameComponent/economy-service/master/api/swagger/v1/economy-service.swagger.json"
                    class="inline-block py-4 px-6 rounded-sm bg-grey-darker text-white no-underline font-medium text-sm"
                    style="letter-spacing: 0.3px;"
                  >Check it out</a>
                </div>
              </div>
            </div>

            <!-- GRPC -->
            <div class="w-full border border-grey rounded-sm button--shadow mt-8">
              <div class="p-16">
                <h2 class="text-black text-3xl leading-tight">GRPC API</h2>
                <p
                  class="text-grey-darker leading-normal mt-4"
                >Check out the GRPC/Protobuf documentation/specification file.</p>
                <div class="mt-8">
                  <a
                    href="https://github.com/GameComponent/economy-service/blob/master/api/proto/v1/economy-service.proto"
                    class="inline-block py-4 px-6 rounded-sm bg-grey-darker text-white no-underline font-medium text-sm"
                    style="letter-spacing: 0.3px;"
                  >Check it out</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class DevelopersEconomy extends Vue {
  public head() {
    return {
      title: "GameComponent - Economy service documentation"
    };
  }
}
</script>
