<style scoped>
.background--light-blue {
  background-image: linear-gradient(-90deg, #b3f1ff, #cff5fe);
}

.background--blog {
  background-image: url("~assets/illustration/blog.svg");
  background-position: center left;
  background-repeat: no-repeat;
  background-size: contain;
}

.text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

@media (min-width: 992px) {
  .hover\:scale:hover {
    transform: scale(1.02);
    transition: 0.25s;
  }
}
</style>

<template>
  <div>
    <section class="background--light-blue">
      <div class="container mx-auto pb-16 pt-16 md:pt-32 px-8 lg:px-16">
        <div class="w-full pt-16 md:pt-0">
          <h1 class="text-black text-5xl w-128" style="letter-spacing: 0.5px;">Contact</h1>
          <p class="text-grey-darker mt-4 text-xl leading-normal">
            To get in touch you send a mail to
            <a
              href="mailto:info@gamecomponent.com"
              class="no-underline text-blue"
            >info@gamecomponent.com</a>.
          </p>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-8 lg:px-16">
        <form
          action="https://discordapp.com/api/webhooks/706803275311087676/Ni-HRGLIp8vX9rKLLB1YkR0gGsZKFm3cOqfN_10y90s63hleD7CxyYa52e9tsfUMpWvo"
          method="POST"
          enctype="multipart/form-data"
          @submit="onSubmitForm"
        >
          <div
            class="uppercase text-xs font-bold text-grey-darker leading-normal"
            style="letter-spacing: 0.5px;"
          >YOUR EMAIL</div>

          <input
            v-model="form.email"
            type="email"
            name="username"
            placeholder="Your email"
            class="mt-2 bg-grey-light rounded p-2"
          />
          <br />
          <div
            class="uppercase text-xs font-bold text-grey-darker leading-normal mt-8"
            style="letter-spacing: 0.5px;"
          >YOUR MESSAGE</div>
          <textarea
            v-model="form.message"
            name="content"
            cols="60"
            rows="10"
            placeholder="Your message"
            class="mt-2 bg-grey-light rounded p-2"
          ></textarea>
          <br />
          <div
            v-show="isDone"
            class="inline-block bg-green text-white rounded p-4 mt-8"
          >We received your message, we will get in touch with you soon.</div>
          <br />
          <input
            type="submit"
            value="Send message"
            class="mt-8 inline-block py-4 px-6 rounded-sm text-white no-underline font-medium text-sm"
            :class="{
              'bg-green': isFormReady,
              'bg-grey': !isFormReady,
              'hover:bg-green-light': isFormReady,
              'cursor-pointer': isFormReady,
            }"
            :disabled="!isFormReady"
          />
        </form>
      </div>
    </section>

    <GmapMap
      :center="{
        lat: 53.21574928658814,
        lng: 6.575784682517032,
      }"
      :zoom="16"
      :options="{
        styles: this.mapStyle,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: true,
        disableDoubleClickZoom: true,
        clickableIcons: false,
        zoomControl: false,
      }"
      map-type-id="terrain"
      style="width: 100%; height: 500px"
    >
      <GmapMarker
        :position="{
          lat: 53.21574928658814,
          lng: 6.575784682517032,
        }"
      />
    </GmapMap>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class Contact extends Vue {
  public form = {
    email: "",
    message: ""
  };

  public isDone = false;

  public head() {
    return {
      title: "GameComponent - Contact"
    };
  }

  public onSubmitForm(e) {
    console.log("onSubmitForm", e);
    e.preventDefault();
    e.target.submit();

    this.form = {
      email: "",
      message: ""
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

  get mapStyle() {
    return [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#1d2c4d"
          }
        ]
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#8ec3b9"
          }
        ]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#1a3646"
          }
        ]
      },
      {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "administrative.country",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#4b6878"
          }
        ]
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#64779e"
          }
        ]
      },
      {
        featureType: "administrative.province",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#4b6878"
          }
        ]
      },
      {
        featureType: "landscape.man_made",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#334e87"
          }
        ]
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [
          {
            color: "#023e58"
          }
        ]
      },
      {
        featureType: "poi",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#283d6a"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#6f9ba5"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#1d2c4d"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#023e58"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#3C7680"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#304a7d"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#98a5be"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#1d2c4d"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#2c6675"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#255763"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#b0d5ce"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#023e58"
          }
        ]
      },
      {
        featureType: "transit",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#98a5be"
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#1d2c4d"
          }
        ]
      },
      {
        featureType: "transit.line",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#283d6a"
          }
        ]
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          {
            color: "#3a4762"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#0e1626"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#4e6d70"
          }
        ]
      }
    ];
  }
}
</script>
