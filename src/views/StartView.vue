<template>
  <!-- <div>Your Login is:<strong>{{ $store.state.currentNewUser }}</strong></div> -->

  <img class="main-logo" alt="Vue logo" src="../assets/logo.png" />
  <div class="start-wrapper">
    <h1 class="start-wrapper__title">
      This project is using some of Vue 3 things such as:
    </h1>
    <div class="start-wrapper__el"><strong>Vue router</strong></div>
    <div class="start-wrapper__el"><strong>Vuex</strong></div>
    <div class="start-wrapper__el">
      <strong>jsonplaceholder API:</strong>
      <a target="_blank" href="https://jsonplaceholder.typicode.com/"
        >jsonplaceholder.typicode.com/</a
      >
    </div>
    <div class="start-wrapper__el">
      <strong>Firebase:</strong>
      <a target="_blank" href="https://firebase.google.com/"
        >https://firebase.google.com/</a
      >
    </div>
    <!-- <div class="start-wrapper__el">
      <strong>Auth0:</strong>
      <a target="_blank" href="https://auth0.com/">https://auth0.com/</a>
    </div> -->
  </div>
</template>

<script >

export default {};
</script>

<style>
.form {
  padding: 40px 0;
}

.sendBtn {
  max-width: 290px;
  width: 100%;
  box-sizing: border-box;
  margin: 20px 0 auto;
}

.main-logo {
  max-width: 140px;
  width: 100%;
  height: 140px;
  object-fit: cover;
}

</style>
