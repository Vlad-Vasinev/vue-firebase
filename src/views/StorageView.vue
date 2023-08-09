<template>
  <img class="main-logo" alt="Vue logo" src="../assets/logo.png" />
  <div class="post-inner">
    <div class="form-group">
      <input
        @input="$store.commit('search', $event.target.value)"
        v-bind:value="$store.state.searchInfo"
        type="text"
        class="form-control form-find"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Find any post here by title"
      />
    </div>

    <ul
      v-if="
        $store.state.searchInfo === ' ' ||
        $store.state.searchInfo === '' ||
        $store.state.searchInfo === 0
      "
      class="list"
    >
      <li class="list__el" v-for="el in $store.state.posts" :key="el.id">
        <strong class="list__el-title"> {{ el.title }} </strong>
        <p class="list__el-info">
          {{ el.info }}
        </p>
        <div class="btns-wrapper">
          <button
            @click="$store.commit('editPost', el.id)"
            class="edit-post btn btn-primary"
          >
            Edit Post
          </button>
          <button
            @click="$store.commit('removePost', el.id)"
            class="remove-post btn btn-primary"
          >
            Remove Post
          </button>
        </div>
      </li>
    </ul>
    <ul v-else class="list">
      <li class="list__el" v-for="el in $store.state.filterValue" :key="el.id">
        <strong class="list__el-title"> {{ el.title }} </strong>
        <p class="list__el-info">
          {{ el.info }}
        </p>
        <button
          @click="$store.commit('editPost', el.id)"
          class="edit-post btn btn-primary"
        >
          Edit Post
        </button>
        <button
          @click="$store.commit('removePost', el.id)"
          class="remove-post btn btn-primary"
        >
          Remove Post
        </button>
      </li>
    </ul>
    <form class="form" @submit.prevent="onSubmit">
      <div class="form-group inputWrappper">
        <input
          @input="$store.commit('getInputTitle', $event.target.value)"
          v-bind:value="$store.state.newPostTitle"
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Add new title"
        />
      </div>
      <div class="form-group inputWrappper">
        <input
          @input="$store.commit('getInputINfo', $event.target.value)"
          v-bind:value="$store.state.newPostInfo"
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Add new info"
        />
      </div>
      <button
        @click="$store.commit('addPost')"
        type="submit"
        class="sendBtn btn btn-primary"
      >
        Add post
      </button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.form {
  padding: 40px 0;
}

.sendBtn {
  max-width: 290px;
  width: 100%;
  box-sizing: border-box;
  margin: 20px 0 auto;
}

.list {
  max-width: 600px;
  width: 100%;
  margin: 40px 40px 0 0;
}

.list__el {
  margin: 0 auto;
  padding: 8px;
  list-style: none;
  text-align: left;
  max-width: 600px;
  width: 100%;
  box-sizing: border-box;
  border: 2px solid rgb(175, 240, 78);
}

.list__el + .list__el {
  margin-top: 14px;
}

.list__el-title {
  text-transform: uppercase;
}

.post-inner {
  align-items: baseline;
  display: flex;
  justify-content: center;
}

.form-group + .form-group {
  margin-top: 14px;
}

.main-logo {
  max-width: 140px;
  width: 100%;
  height: 140px;
  object-fit: cover;
}

.add-post {
  display: block;
  max-width: 290px;
  width: 100%;
  box-sizing: border-box;
  margin: 20px auto 40px;
  border: none;
}

.remove-post {
  max-width: 190px;
  margin-top: 0;
  margin-left: auto;
  margin-right: 0;
  background-color: rgb(238, 140, 54);
}

.btns-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
