<style scoped>
  .background--light-blue {
    background-image: linear-gradient(-90deg, #b3f1ff, #cff5fe);
  }

  .background--blog {
    background-image: url('~assets/illustration/blog.svg');
    background-position: center left;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .text-shadow {
    text-shadow: 0 2px 4px rgba(0,0,0,0.10);
  }

  @media (min-width: 992px) {
    .hover\:scale:hover {
      transform: scale(1.02);
      transition: .25s;
    }
  }
</style>

<template>
  <div>
    <section class="background--light-blue">
      <div class="container mx-auto pb-16 pt-16 md:pt-32 px-8 lg:px-16">
        <div class="w-full pt-16 md:pt-0">
          <h1 class="text-black text-5xl w-128" style="letter-spacing: 0.5px;">
            Contact
          </h1>
          <p class="text-grey-darker mt-4 text-xl leading-normal">
            To get in touch you send a mail to <a href="mailto:info@gamecomponent.com" class="no-underline text-blue">info@gamecomponent.com</a>.
          </p>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-8 lg:px-16">
        <form
          action="https://discordapp.com/api/webhooks/564035125692727307/2ODfWWuXCflurd5mttSu0aB2ttx37YaN2FslKyoQQcWMRUJdIrYvc5Tz4URe3UifZa51"
          method="POST"
          enctype="multipart/form-data"
          @submit="onSubmitForm"
        >
          <div class="uppercase text-xs font-bold text-grey-darker leading-normal" style="letter-spacing: 0.5px;">
            YOUR EMAIL
          </div>

          <input
            v-model="form.email"
            type="email"
            name="username"
            placeholder="Your email"
            class="mt-2 bg-grey-light rounded p-2"
          >
          <br>
          <div class="uppercase text-xs font-bold text-grey-darker leading-normal mt-8" style="letter-spacing: 0.5px;">
            YOUR MESSAGE
          </div>
          <textarea
            v-model="form.message"
            name="content"
            cols="60"
            rows="10"
            placeholder="Your message"
            class="mt-2 bg-grey-light rounded p-2"
          ></textarea>
          <br>
          <div
            v-show="isDone"
            class="inline-block bg-green text-white rounded p-4 mt-8"
          >
            We received your message, we will get in touch with you soon.
          </div>
          <br>
          <input
            type="submit"
            value="Send message"
            class="mt-8 inline-block py-4 px-6 rounded-sm  text-white no-underline font-medium text-sm"
            :class="{
              'bg-green': isFormReady,
              'bg-grey': !isFormReady,
              'hover:bg-green-light': isFormReady,
              'cursor-pointer': isFormReady,
            }"
            :disabled="!isFormReady"
          >
        </form>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component
export default class Contact extends Vue {
  public form = {
    email: '',
    message: '',
  }

  public isDone = false;

  public head () {
    return {
      title: 'GameComponent - Contact'
    };
  }

  public onSubmitForm(e) {
    console.log('onSubmitForm', e);
    e.preventDefault();
    e.target.submit();

    this.form = {
      email: '',
      message: '',
    };

    this.isDone = true;
  }

  public checkIsvalidEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  get isFormReady() {
    if (this.form.email.length === 0) return false;
    if (this.form.message.length === 0) return false;

    return this.checkIsvalidEmail(this.form.email);
  }
}
</script>
