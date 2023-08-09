<template>
  <nav>
    <router-link to="/">Register</router-link>
    <router-link to="/sign-in">Sign In</router-link>
    <router-link to="/startpage">Start page</router-link>
    <router-link to="/jsonplaceholder">Content from jsonplaceholder API</router-link>
    <router-link to="/storage">Vuex storage</router-link>
    <button style="max-width: max-content; display: block; margin: 20px auto 0;" class="sendBtn btn btn-primary" @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
  </nav>
  <router-view/>
</template>

<script setup>

import { onMounted, ref } from "vue";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import router from "./router";
  const isLoggedIn = ref(false);

  let auth;
  onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if(user) {
        isLoggedIn.value = true;
      }
      else {
        isLoggedIn.value = false;
      }
    })
  });

  const handleSignOut = () => {
    signOut(auth).then(() => {
      router.push("/register");
    })
  }
</script>


<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a + a {
  margin-left: 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
