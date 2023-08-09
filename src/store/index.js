import { createStore } from "vuex";

import { v4 as uuidv4 } from "uuid";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  plugins: [createPersistedState({})],
  state: {
    currentUser: "",
    currentNewUser: "",
    countNumbers: 0,
    newPostTitle: "",
    newPostInfo: "",
    searchInfo: "",
    filterValue: "",
    posts: [
      {
        title: "I just hit the road",
        id: 1,
        info: "Lorem text for the fisrt title",
      },
      {
        title: "Held in contempt",
        id: 2,
        info: "Lorem text for the second title",
      },
      {
        title: "Double down on",
        id: 3,
        info: "Lorem text for the third title",
      },
      {
        title: "common sense",
        id: 4,
        info: "Lorem text for the fourth title",
      },
    ],
  },
  getters: {
  },
  mutations: {

    setNewCurrentUser (state, user) {
      console.log(user);
      state.currentNewUser = user;
    },

    getInputTitle(state, e) {
      state.newPostTitle = e;
    },
    getInputINfo(state, e) {
      state.newPostInfo = e;
    },

    removePost(state, ElId) {
      state.posts = state.posts.filter((el) => el.id !== ElId);
    },
    editPost(state, id) {
      const editSpecificPost = state.posts.find((el) => el.id === id);
      editSpecificPost.title = prompt("put the new title right here");
      editSpecificPost.info = prompt("put the new info right here");
    },

    search(state, e) {
      state.searchInfo = e;
      state.filterValue = state.posts.filter((el) => {
        return el.title
          .toLocaleLowerCase()
          .includes(state.searchInfo.toLocaleLowerCase());
      });
    },

    addPost(state) {
      const newPost = {
        title: state.newPostTitle,
        id: uuidv4(),
        info: this.state.newPostInfo,
      };
      state.posts = [...state.posts, newPost];
      state.newPostTitle = "";
      state.newPostInfo = "";
    },
    
  },
  actions: {
    
  },
  modules: {},
});
