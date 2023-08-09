<template>
  <h1>Sign In into account</h1>
  <div>
    <h2
      style="
        font-size: 20px;
        line-height: 100%;
        font-weight: 700;
        margin-top: 20px;
      "
    >
      To make quick entrance use those credentials for instance:
    </h2>
    <p style="margin-bottom: 0">login:<strong>888@mail.ru</strong></p>
    <p style="margin-bottom: 10px">password:<strong>888888</strong></p>
  </div>
  <p>
    <input
      style="max-width: max-content; margin: 0 auto"
      class="form-control form-find"
      type="text"
      placeholder="Email"
      v-model="email"
      autocomplete="off"
    />
  </p>
  <p>
    <input
      style="max-width: max-content; margin: 0 auto"
      class="form-control form-find"
      type="password"
      placeholder="Password"
      v-model="password"
      autocomplete="off"
    />
  </p>
  <p v-if="errMsg">{{ errMsg }}</p>
  <p>
    <button class="sendBtn btn btn-primary" @click="register">LogIn</button>
  </p>
  <!-- <p><button @click="signInWithGoogle">LogIn In With Google</button></p> -->
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import router from "@/router";

const email = ref("");
const password = ref("");
const errMsg = ref();

const register = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("Successfully signed in");
      router.push("/startpage");
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password";
          break;
        default:
          errMsg.value = "Email or password was incorrect";
      }
      alert(error.message);
    });
};

const signInWithGoogle = () => {};
</script>

<style scoped></style>
