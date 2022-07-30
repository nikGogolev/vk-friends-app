import { createStore } from "vuex";
import {
  ADD_USER,
  LOAD_USERS,
  REMOVE_USER,
  STORE_APIKEY,
  AUTHORIZED,
  MY_SORTED_FRIENDS,
} from "./mutationTypes";

export default createStore({
  state: {
    users: new Map(),
    apiKey: "",
    authorized: false,
    mySortedFriends: [],
  },
  getters: {
    getUserList(state) {
      return Array.from(state.users.values()).sort((user1, user2) => {
        if (user1.name > user2.name) {
          return 1;
        } else {
          return -1;
        }
      });
    },
    getUserById: (state) => (id) => {
      return state.users.get(id);
    },
    getMyFriendsById: (state) => (id) => {
      return Array.from(state.users.values())
        .filter((user) => {
          return user.friendList.includes(id);
        })
        .sort((user1, user2) => {
          if (user1.name > user2.name) {
            return 1;
          } else {
            return -1;
          }
        });
    },
    getApiKey(state) {
      return state.apiKey;
    },
    getAuthorizedStatus(state) {
      return state.authorized;
    },
    getMySortedFriends(state) {
      return state.mySortedFriends;
    },
  },
  mutations: {
    [ADD_USER](state, payload) {
      state.users.set(payload["id"], payload["user"]);
      localStorage.setItem(
        "userList",
        JSON.stringify(Array.from(state.users.entries()))
      );
    },
    [REMOVE_USER](state, payload) {
      state.users.delete(payload);
      localStorage.setItem(
        "userList",
        JSON.stringify(Array.from(state.users.entries()))
      );
    },
    [LOAD_USERS](state) {
      const userList = new Map(JSON.parse(localStorage.getItem("userList")));
      state.users = userList;
    },
    [STORE_APIKEY](state, payload) {
      state.apiKey = payload;
    },
    [AUTHORIZED](state) {
      state.authorized = true;
    },
    [MY_SORTED_FRIENDS](state, payload) {
      state.mySortedFriends = payload;
    },
  },
  actions: {
    addUser({ commit }, payload) {
      commit(ADD_USER, payload);
    },
    removeUser({ commit }, payload) {
      commit(REMOVE_USER, payload);
    },
  },
  modules: {},
});
