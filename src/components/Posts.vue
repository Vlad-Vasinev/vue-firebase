<template>
  <div class="post-inner">
    <form class="form">
      <button @click="getData" type="submit" class="sendBtn btn btn-primary">
        get Users
      </button>
    </form>
  </div>
  <div>
    <ul class="custom-list">
      <li class="custom-list__el" v-for="post in postsFromJson" :key="post.id">
        <h2 class="custom-list__title">{{ post.title }}</h2>
        <img class="custom-list__img" :src="post.url" />
        <strong class="custom-list__id">here is post's id:{{ post.id }}</strong>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["userEmail", "userName"],
  data() {
    return {
      paginationCounter: 0,
      postsFromJson: [],
    };
  },

  methods: {

    async getData(e) {
      e.preventDefault();
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/photos?_start=${this.paginationCounter}&_limit=5`
        );
        console.log(response.data);

        response.data.forEach((element) => {
          this.postsFromJson.push(element);
        });
        this.paginationCounter += 1;
      } catch (e) {
        console.log("Error is happened");
      }
    },
  },
};
</script>

<style scoped>
.post-inner {
  align-items: baseline;
  display: flex;
  justify-content: center;
}

.form {
  margin-top: 60px;
}

.sendBtn {
  max-width: 290px;
  width: 100%;
  box-sizing: border-box;
  margin: 20px 0 auto;
}

.custom-list {
  max-width: 600px;
  width: 100%;
  margin: 40px auto 0;
}

.custom-list__el {
  margin: 0 auto;
  padding: 8px;
  list-style: none;
  text-align: left;
  max-width: 600px;
  width: 100%;
  box-sizing: border-box;
  border: 2px solid rgb(78, 199, 240);
}

.custom-list__el + .custom-list__el {
  margin-top: 18px;
}

.custom-list__img {
  display: block;
  max-width: 100px;
  width: 100%;
  max-height: 100px;
  object-fit: cover;
}

</style>
