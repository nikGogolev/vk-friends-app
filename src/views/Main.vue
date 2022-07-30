<template>
  <div class="main_container" v-if="authorized">
    <div class="friend_list-container">
      <add-user-form @error="(errorText) => setError(errorText)" />
      <button @click="calculate" class="calculate_button">Построить</button>

      <div class="user-list">
        <h2 v-if="mySortedFriends.length">Список друзей</h2>
        <template v-for="friend in mySortedFriends" :key="friend.id">
          <friend-card
            :friend="friend"
            :brightness="
              (friend.inFriendWithAmount - minFriends) *
                ((maxBrightness - minBrightness) / (maxFriends - minFriends)) +
              minBrightness
            "
          />
        </template>
      </div>
    </div>

    <div class="user_list-container">
      <h2 v-if="userList.length">Список пользователей</h2>
      <template v-for="user in userList" :key="user.id">
        <user-card :user="user" />
      </template>
    </div>
  </div>
</template>

<script>
import AddUserForm from "@/components/AddUserForm.vue";
import store from "@/store";
import UserCard from "@/components/UserCard.vue";
import FriendCard from "@/components/FriendCard.vue";
import { MAX_BRIGHTNESS, MIN_BRIGHTNESS } from "@/utils";
import { MY_SORTED_FRIENDS } from "@/store/mutationTypes";

export default {
  name: "HomeView",
  created() {
    this.mySortedFriends = store.getters.getMySortedFriends;
  },
  data() {
    return {
      minBrightness: MIN_BRIGHTNESS,
      maxBrightness: MAX_BRIGHTNESS,
      mySortedFriends: [],
    };
  },
  methods: {
    setError(errorText) {
      console.log(errorText);
      this.$emit("error", errorText);
    },
    calculate() {
      const allUsers = store.getters.getUserList;
      allUsers.forEach((user) => {
        user.inFriendWithAmount = 0;
      });
      const mySortedFriends = store.getters.getUserList
        .filter((user) => user.isFriend)
        .sort((a, b) => {
          if (a.name + a.surname > b.name + b.surname) {
            return 1;
          } else {
            return -1;
          }
        });
      mySortedFriends.forEach((friend) => {
        allUsers.forEach((user) => {
          if (user.friendList.includes(friend.id)) {
            friend.inFriendWithAmount++;
          }
        });
      });
      this.mySortedFriends = mySortedFriends;
      store.commit(MY_SORTED_FRIENDS, mySortedFriends);
    },
  },
  computed: {
    averageFriends() {
      return (
        this.userList.reduce((acc, current) => {
          return acc + current.inFriendWithAmount;
        }, 0) / this.userList.length
      );
    },
    minFriends() {
      const sortedUserList = [...this.userList].sort(
        (a, b) => a.inFriendWithAmount - b.inFriendWithAmount
      );
      return sortedUserList[0].inFriendWithAmount;
    },
    maxFriends() {
      const sortedUserList = [...this.userList].sort(
        (a, b) => a.inFriendWithAmount - b.inFriendWithAmount
      );
      return sortedUserList[sortedUserList.length - 1].inFriendWithAmount;
    },
    userList() {
      return store.getters.getUserList;
    },
    authorized() {
      return store.getters.getAuthorizedStatus;
    },
  },
  components: {
    AddUserForm,
    UserCard,
    FriendCard,
  },
};
</script>

<style>
.main_container {
  display: flex;
  width: 100%;
  justify-content: space-around;
}
.friend_list-container {
  display: flex;
  flex-direction: column;
  flex-basis: 60%;
}
.user_list-container {
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
}
.user-list {
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: 100%;
}
.calculate_button {
  padding: 5px 20px;
  cursor: pointer;
  margin: 5px auto;
  background-color: seagreen;
  border-color: seagreen;
}
</style>
