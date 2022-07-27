<template>
  <div class="home">
    <add-friend-form :onInput="onInput" />

    <div class="friend-list">
      <template v-for="friend in friendList" :key="friend.id">
        <friend-card
          :friend="friend"
          :brightness="
            (friend.friendList.length - minFriends) *
              ((maxBrightness - minBrightness) / (maxFriends - minFriends)) +
            minBrightness
          "
        />
      </template>
    </div>
  </div>
</template>

<script>
import AddFriendForm from "@/components/AddFriendForm.vue";
import store from "@/store";
import FriendCard from "@/components/FriendCard.vue";
import { ACCESS_TOKEN } from "@/utils.js";

const MIN_BRIGHTNESS = 50;
const MAX_BRIGHTNESS = 170;
export default {
  name: "HomeView",

  created() {},

  data() {
    return {
      id: "",
      friendList: store.getters.getFriendList,
      minBrightness: MIN_BRIGHTNESS,
      maxBrightness: MAX_BRIGHTNESS,
    };
  },
  methods: {
    async onInput(searcText) {
      const searchRequest = `http://localhost:8010/proxy/method/users.search?q=${searcText}&access_token=${ACCESS_TOKEN}&v=5.131`;
      // const searchRequest =
      //   "https://api.vk.com/method/users.search?q=Nikita&access_token=vk1.a.YP3zbZX6vkO6-uTCXKBhyBzdagFSMCLqYPX4CAAu-6dUiOG1OzlC7U9vy827YQ4Yc86mQ7kU7_y1FOQdJh2hXbDJTsCXUXAuc7N4E1g54pmfAwP2TgbUF722zuihqDC9kyT1bS-q2PfXmE6GVXPQEMuQtXVaJycA6kTUX0mfBvHuXNUT9cTNJdortIOnK0v9&v=5.131";
      const response = await fetch(searchRequest, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      const data = await response.json();
      console.log(data);
    },
  },
  computed: {
    averageFriends() {
      return (
        this.friendList.reduce((acc, current) => {
          return acc + current.friendList.length;
        }, 0) / this.friendList.length
      );
    },
    minFriends() {
      const sortedFriendList = [...this.friendList].sort(
        (a, b) => a.friendList.length - b.friendList.length
      );
      return sortedFriendList[0].friendList.length;
    },
    maxFriends() {
      const sortedFriendList = [...this.friendList].sort(
        (a, b) => a.friendList.length - b.friendList.length
      );
      return sortedFriendList[sortedFriendList.length - 1].friendList.length;
    },
  },
  components: {
    AddFriendForm,
    FriendCard,
  },
};
</script>

<style>
.friend-list {
  display: flex;
  flex-direction: column;
  margin: 50px auto;
}
</style>
