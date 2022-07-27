<template>
  <div>
    <router-link to="/">Back</router-link>
    <h1>{{ friend?.name }}, {{ friend?.surname }}</h1>
    <img :src="friend?.imgUrl" alt="friend photo" />
    <div class="friend-list">
      <template v-for="friend in friendList" :key="friend.id">
        <friend-card :friend="friend" />
      </template>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import FriendCard from "@/components/FriendCard.vue";

export default {
  name: "FriendView",
  data() {
    return {
      id: "",
      friend: store.getters.getFriendById(+this.$route.params["id"]),
      friendList: store.getters.getMyFriendsById(+this.$route.params["id"]),
    };
  },
  components: { FriendCard },
};
</script>
<style>
.friend-card {
  display: flex;
  margin: 0 auto;
  cursor: pointer;
  width: 60%;
  height: 200px;
  border: 1px solid black;
  align-items: center;
  margin: 10px auto;
}
.friend-card-img {
  width: 100px;
  height: 100px;
  margin: 20px;
}
.friend-card-description {
  display: flex;
  flex-direction: column;
  align-items: start;
}
.friend-card-description-header {
  margin: 10px;
}
.friend-card-description-text {
  margin: 5px 10px;
}
</style>
