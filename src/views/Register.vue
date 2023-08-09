<template>
    <h1>Create an account</h1>
    <p> <input style="max-width: max-content; margin: 0 auto" class="form-control form-find" type="text" placeholder="Email" v-model="email" /> </p>
    <p> <input style="max-width: max-content; margin: 0 auto" class="form-control form-find" type="password" placeholder="Password" v-model="password" /> </p>
    <p> <button class="sendBtn btn btn-primary" @click="register">Submit</button> </p>
    <!-- <p> <button @click="signInWithGoogle">sign In With Google</button> </p> -->
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import router from '@/router';
import { auth } from "@/firebaseConfig";

const email = ref("");
const password = ref("");

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
        console.log("Successfully registered");
        console.log(auth.currentUser.email);
        // commit("setNewCurrentUser", auth.currentUser.email);
        router.push("/startpage")
    })
    .catch((error) => {
        console.log(error.code)
        alert(error.message)
    })
}

// const signInWithGoogle = () => {

// }


</script>


<style scoped>

</style>
