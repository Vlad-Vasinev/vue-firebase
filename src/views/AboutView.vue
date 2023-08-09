<template>
  <div class="home">
    <img class="main-logo" alt="Vue logo" src="../assets/logo.png" />
    <posts ></posts>
  </div>
</template>

<script>
// @ is an alias to /src
import Posts from "@/components/Posts.vue";

export default {
  name: "AboutView",
  components: {
    Posts,
  },

  data() {
    return {
    }
  },

  methods: {
  }

};
</script>

<style scoped>

.main-logo {
  max-width: 140px;
  width: 100%;
  height: 140px;
  object-fit: cover;
}

</style>