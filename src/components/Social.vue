<template>
  <ul class="social">
    <li v-for="(social, i) in socialList" :key="i">
      <a :href="social.link" target="_blank" rel="noreferrer"
        ><img class="svg" :src="social.src" alt="social"
      /></a>
    </li>
  </ul>
  <!-- End. social -->
</template>

<script>
  export default {
    data() {
      return {
        socialList: [
          {
            link: "https://www.facebook.com/",
            src: require("../assets/img/svg/social/gmail3.svg"),
          },
          {
            link: "https://www.linkedin.com/in/umang-talpara/",
            src: require("../assets/img/svg/social/linkedin.svg"),
          },
          {
            link: "https://github.com/umangtalpara",
            src: require("../assets/img/svg/social/github.svg"),
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped></style>
