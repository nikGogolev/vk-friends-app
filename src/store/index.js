import { createStore } from "vuex";
import {
  ADD_FRIEND,
  LOAD_FRIENDS,
  MOCK_DATA,
  REMOVE_FRIEND,
} from "./mutationTypes";

export default createStore({
  state: { friends: new Map() },
  getters: {
    getFriendList(state) {
      return Array.from(state.friends.values()).sort((friend1, friend2) => {
        if (friend1.name > friend2.name) {
          return 1;
        } else {
          return -1;
        }
      });
    },
    getFriendById: (state) => (id) => {
      return state.friends.get(id);
    },
    getMyFriendsById: (state) => (id) => {
      return Array.from(state.friends.values())
        .filter((friend) => {
          return friend.friendList.includes(id);
        })
        .sort((friend1, friend2) => {
          if (friend1.name > friend2.name) {
            return 1;
          } else {
            return -1;
          }
        });
    },
  },
  mutations: {
    [ADD_FRIEND](state, payload) {
      state.friends.set(payload["id"], payload["friend"]);
      localStorage.setItem(
        "friendList",
        JSON.stringify(Array.from(state.friends.entries()))
      );
    },
    [REMOVE_FRIEND](state, payload) {
      state.friends.delete(payload);
    },
    [LOAD_FRIENDS](state) {
      const friendList = new Map(
        JSON.parse(localStorage.getItem("friendList"))
      );
      state.friends = friendList;
    },
    [MOCK_DATA](state, payload) {
      state.friends = payload;
      localStorage.setItem(
        "friendList",
        JSON.stringify(Array.from(state.friends.entries()))
      );
    },
  },
  actions: {
    addFriend({ commit }, payload) {
      commit(ADD_FRIEND, payload);
    },
    removeFriend({ commit }, payload) {
      commit(REMOVE_FRIEND, payload);
    },
  },
  modules: {},
});
