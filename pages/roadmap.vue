<style scoped>
  .background--light-blue {
    background-image: linear-gradient(-90deg, #b3f1ff, #cff5fe);
  }

  .button--shadow {
    box-shadow: 0 10px 32px 0 rgba(12, 12, 13, .05), 0 2px 16px 0 rgba(12, 12, 13, .01)
  }

  .gc-table {
    background-color: white;
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 5px;
  }
  .gc-table a {
    text-decoration: none;
    color: #187741;
    font-weight: 500;
    margin-right: 20px;
    margin-left: 20px;
  }
  .gc-table a:hover {
    text-decoration: underline;
  }
  .gc-table th {
    padding: 20px;
    text-align: left;
  }
  .gc-table tbody tr:hover {
    background-color: #F5F8FC;
  }
  .gc-table thead {
    background-color: #F2F5F7;
  }
  .gc-table thead th {
    font-weight: semibold;
    color: #4a4a4a;
    text-transform: uppercase;
    padding: 20px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    font-weight: 500;
    letter-spacing: 0.05em;
  }
  .gc-table tbody td {
    padding: 20px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
  .gc-table__description {
    font-size: 10px;
    color: #888;
  }

  .gc-table__text-main {
    font-weight: semibold;
    color: #4a4a4a;
    text-transform: uppercase;
    padding: 20px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    font-weight: 500;
    letter-spacing: 0.05em;
  }
</style>

<template>
  <div>
    <section class="background--light-blue">
      <div class="container mx-auto clearfix pt-32 pb-16 px-8 lg:px-16">
        <div
          class="w-full md:w-1/2 md:float-right flex items-center justify-center"
        >
          <img
            src="~assets/illustration/navigation.svg"
            alt=""
            class="w-64 h-64"
          >
        </div>

        <div class="w-full mt-8 md:mt-0 md:w-1/2 md:float-left">
          <h1 class="text-black text-5xl w-128" style="letter-spacing: 0.5px;">
            The roadmap
          </h1>
          <p class="text-grey-darker mt-4 text-xl leading-normal">
            We do not set highly ambitious goals. Rather we set realistic goals. We prefer the mantra <i>"move slow and do things right"</i> over <i>"move fast and break things"</i>.
          </p>
        </div>
      </div>
    </section>

    <section>
      <div class="container bg-white mx-auto rounded clearfix pt-16 lg:pt-32">
        <div class="w-full md:float-left md:w-2/3 px-8 lg:px-16 mt-8 md:mt-0">
          <span class="uppercase text-xs font-bold text-grey-darker leading-normal" style="letter-spacing: 0.5px;">
            THE ROAD AHEAD
          </span>
          <h2 class="text-black text-4xl leading-tight">
            Projections & reality
          </h2>
          <p class="text-grey-darker leading-roomy mt-6">
            We have created a roadmap for the economy service. However we are no fortune-tellers.
            You should checkout the <nuxt-link to="/blog" class="no-underline text-blue">blog</nuxt-link> to get a better image of the current state of the project.
          </p>
        </div>
      </div>
    </section>

    <section class="pt-8 lg:pt-16 pb-16 lg:pb-32">
      <div class="container bg-white mx-auto rounded clearfix mb-16">
        <div class="pb-16 px-8 lg:px-16">
          <div class="overflow-x-auto">
            <table class="gc-table w-full text-left border-collapse border">
              <thead class="border">
                <tr>
                  <th class="border">
                    Project
                  </th>
                  <th>
                    2018 Q2
                  </th>
                  <th>
                    2018 Q3
                  </th>
                  <th>
                    2018 Q4
                  </th>
                </tr>
              </thead>

              <tbody class="border">
                <tr class="border">
                  <td class="border gc-table__text-main">
                    Website
                  </td>
                  <td>
                    <ul class="list-reset">
                      <li>Create a functional website</li>
                      <li>Proper installation instructions</li>
                    </ul>
                  </td>
                  <td>
                    <ul class="list-reset">
                      <li>Embedded OpenAPI, documentation and examples</li>
                      <li>FAQ, helpdesk page</li>
                    </ul>
                  </td>
                  <td>
                    <ul class="list-reset">
                      <li>Signup for Economy SaaS beta</li>
                    </ul>
                  </td>
                </tr>

                <tr class="border">
                  <td class="border gc-table__text-main">
                    Economy service
                  </td>
                  <td></td>
                  <td>
                    <ul class="list-reset">
                      <li>Available through dockerhub</li>
                      <li>Helm configuration</li>
                      <li>Expiring items</li>
                      <li>Trading items</li>
                      <li>Crafting items</li>
                      <li>Authentication and RBAC</li>
                    </ul>
                  </td>
                  <td>
                    <ul class="list-reset">
                      <li>
                        Exchange/market
                      </li>
                    </ul>
                  </td>
                </tr>

                <tr class="border">
                  <td class="border gc-table__text-main">
                    Economy SDK
                  </td>
                  <td>
                    <ul class="list-reset">
                      <li>Proper code generation</li>
                    </ul>
                  </td>
                  <td>
                    <ul class="list-reset">
                      <li>Available through package managers</li>
                    </ul>
                  </td>
                  <td></td>
                </tr>

                <tr class="border">
                  <td class="border gc-table__text-main">
                    Economy webclient
                  </td>
                  <td>
                  </td>
                  <td>
                    <ul class="list-reset">
                      <li>Creating crafting recipes</li>
                      <li>Authentication and RBAC</li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component
export default class Roadmap extends Vue {
  public head () {
    return {
      title: 'GameComponent - Roadmap'
    };
  }
}
</script>
