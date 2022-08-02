<template>
  <div class="main_container" v-if="authorized">
    <div class="friend_list-container">
      <add-user-form @error="(errorText) => setError(errorText)" />
      <button
        @click="calculate"
        class="calculate_button"
        v-if="userList.length"
      >
        Построить
      </button>
      <div class="spinner" id="spinner" v-show="pending">
        <h3>Идет построение списка друзей</h3>
      </div>
      <div class="friend-list">
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
      <div class="user_list">
        <h2 v-if="userList.length" class="header-sticky">
          Список пользователей
        </h2>
        <template v-for="user in userList" :key="user.id">
          <user-card :user="user" @userRemoved="mySortedFriends = []" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import AddUserForm from "@/components/AddUserForm.vue";
import store from "@/store";
import UserCard from "@/components/UserCard.vue";
import FriendCard from "@/components/FriendCard.vue";
import { MAX_BRIGHTNESS, MIN_BRIGHTNESS, VK_URL } from "@/utils";
import { MY_SORTED_FRIENDS } from "@/store/mutationTypes";
import { jsonp } from "vue-jsonp";
import { Spinner } from "spin.js";

const opts = {
  lines: 13, // The number of lines to draw
  length: 38, // The length of each line
  width: 17, // The line thickness
  radius: 45, // The radius of the inner circle
  scale: 1, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 1, // Rounds per second
  rotate: 0, // The rotation offset
  animation: "spinner-line-shrink", // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: "#000000", // CSS color or array of colors
  fadeColor: "transparent", // CSS color or array of colors
  top: "250%", // Top position relative to parent
  left: "50%", // Left position relative to parent
  shadow: "0 0 1px transparent", // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: "spinner", // The CSS class to assign to the spinner
  position: "relative", // Element positioning
};

export default {
  name: "HomeView",
  created() {
    this.mySortedFriends = store.getters.getMySortedFriends;
    this.apiKey = store.getters.getApiKey;
  },
  data() {
    return {
      minBrightness: MIN_BRIGHTNESS,
      maxBrightness: MAX_BRIGHTNESS,
      mySortedFriends: [],
      apiKey: "",
      pending: false,
    };
  },
  methods: {
    setError(errorText) {
      this.$emit("error", errorText);
    },
    async calculate() {
      this.pending = true;
      const target = document.getElementById("spinner");
      // eslint-disable-next-line no-unused-vars
      const spinner = new Spinner(opts).spin(target);

      this.mySortedFriends = [];
      const allUsers = store.getters.getUserList;
      let commonFriendList = new Set();
      allUsers.forEach((user) => {
        commonFriendList = new Set([...commonFriendList, ...user.friendList]);
      });

      const queryArray = [];
      const friendList = [];
      commonFriendList.forEach((item) => {
        queryArray.push(
          `API.users.get({"user_ids":"${item}","fields": "bdate,sex,counters,photo_100"})`
        );
      });
      while (queryArray.length > 0) {
        const searchQuery = queryArray.splice(0, 25).join(",");
        const searchRequest = `${VK_URL}/execute?code=return [${searchQuery}];&access_token=${this.apiKey}&v=5.131`;
        const usersData = await jsonp(searchRequest);
        if (usersData.response) {
          usersData.response.forEach((item) => {
            if (!item[0].deactivated) {
              friendList.push(item[0]);
            }
          });
        }
      }

      const mySortedFriends = friendList.sort((a, b) => {
        if (a.first_name + a.last_name > b.first_name + b.last_name) {
          return 1;
        } else {
          return -1;
        }
      });

      mySortedFriends.forEach((friend) => {
        friend.inFriendWithAmount = 0;
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
      this.pending = false;
    },
  },
  computed: {
    averageFriends() {
      return (
        this.mySortedFriends.reduce((acc, current) => {
          return acc + current.inFriendWithAmount;
        }, 0) / this.mySortedFriends.length
      );
    },
    minFriends() {
      const sortedUserList = [...this.mySortedFriends].sort(
        (a, b) => a.inFriendWithAmount - b.inFriendWithAmount
      );
      return sortedUserList[0]?.inFriendWithAmount;
    },
    maxFriends() {
      const sortedUserList = [...this.mySortedFriends].sort(
        (a, b) => a.inFriendWithAmount - b.inFriendWithAmount
      );
      return sortedUserList[sortedUserList.length - 1]?.inFriendWithAmount;
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
  position: relative;
}
.friend_list-container {
  display: flex;
  flex-direction: column;
  flex-basis: 60%;
}

.user_list-container {
  flex-basis: 30%;
}
.user_list {
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
}
.friend-list {
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
  color: white;
}
@keyframes spinner-line-fade-more {
  0%,
  100% {
    opacity: 0; /* minimum opacity */
  }
  1% {
    opacity: 1;
  }
}

@keyframes spinner-line-fade-quick {
  0%,
  39%,
  100% {
    opacity: 0.25; /* minimum opacity */
  }
  40% {
    opacity: 1;
  }
}

@keyframes spinner-line-fade-default {
  0%,
  100% {
    opacity: 0.22; /* minimum opacity */
  }
  1% {
    opacity: 1;
  }
}

@keyframes spinner-line-shrink {
  0%,
  25%,
  100% {
    /* minimum scale and opacity */
    transform: scale(0.5);
    opacity: 0.25;
  }
  26% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
