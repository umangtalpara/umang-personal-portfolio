<template>
  <div>
    <hooper :settings="hooperSettings">
      <slide v-for="(brand, i) in brandList" :key="i">
        <img :src="brand.src" alt="brand" />
      </slide>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
export default {
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      brandList: [
        {
          src: require("../assets/img/partners/bootstrap.png"),
        },
        {
          src: require("../assets/img/partners/git.png"),
        },
        {
          src: require("../assets/img/partners/mongodb.png"),
        },
        {
          src: require("../assets/img/partners/mysql.png"),
        },
        {
          src: require("../assets/img/partners/node-js.png"),
        },
        {
          src: require("../assets/img/partners/react-logo.png"),
        },
        {
          src: require("../assets/img/partners/vuejs.png"),
        },
        {
          src: require("../assets/img/partners/vuetify.png"),
        },
      ],
      hooperSettings: {
        infiniteScroll: true,
        wheelControl: false,
        autoPlay: true,
        transition: 200,
        playSpeed: 1500,
        breakpoints: {
          1200: {
            itemsToShow: 5,
          },
          576: {
            itemsToShow: 4,
          },
          280: {
            itemsToShow: 3,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss">
.hooper {
  height: auto;
}
</style>
