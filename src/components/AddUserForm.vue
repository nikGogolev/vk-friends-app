<template>
  <div>
    <input
      type="text"
      v-model="searchText"
      @input="searchTimeOut"
      class="search-input"
      placeholder="Введите имя пользователя или идентификатор"
    />
    <search-result :addUser="addUser" :searchResult="searchResult" />
    <button @click="search" v-if="searchResult.length" class="more-button">
      Загрузить еще
    </button>
  </div>
</template>

<script>
import store from "@/store";
import { ADD_USER } from "@/store/mutationTypes";
import SearchResult from "@/components/SeachResult.vue";
import { VK_URL } from "@/utils";
import { jsonp } from "vue-jsonp";

export default {
  name: "AddUserForm",
  data() {
    return {
      searchText: "",
      searchResult: [],
      apiKey: "",
    };
  },
  created() {
    this.apiKey = store.getters.getApiKey;
  },
  methods: {
    async searchTimeOut() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.timer = setTimeout(() => {
        this.onInput();
      }, 500);
    },
    async onInput() {
      try {
        const searchRequest = `${VK_URL}/users.search?q=${this.searchText}&access_token=${this.apiKey}&v=5.131`;
        const data = await jsonp(searchRequest);
        if (data.response) {
          const searchResult = data.response.items
            .reduce((prev, curr) => {
              return prev.concat([curr.id]);
            }, [])
            .join(",");
          const searchRequest = `${VK_URL}/users.get?user_ids=${searchResult}&fields=photo_100,sex,bdate,is_friend&access_token=${this.apiKey}&v=5.131`;
          const usersData = await jsonp(searchRequest);
          this.searchResult = usersData.response;
        }
        if (data.error) {
          this.$emit("error", data.error.error_msg);
        }
      } catch (error) {
        this.$emit("error", error.message || error.statusText);
      }
    },
    async search() {
      try {
        const offset = this.searchResult.length;
        const searchRequest = `${VK_URL}/users.search?q=${this.searchText}&offset=${offset}&access_token=${this.apiKey}&v=5.131`;
        const data = await jsonp(searchRequest);
        if (data.response) {
          const searchResult = data.response.items
            .reduce((prev, curr) => {
              return prev.concat([curr.id]);
            }, [])
            .join(",");
          const searchRequest = `${VK_URL}/users.get?user_ids=${searchResult}&fields=photo_100,sex,bdate,is_friend&access_token=${this.apiKey}&v=5.131`;
          const usersData = await jsonp(searchRequest);
          this.searchResult = [...this.searchResult, ...usersData.response];
        }
        if (data.error) {
          this.$emit("error", data.error.error_msg);
        }
      } catch (error) {
        this.$emit("error", error.message || error.statusText);
      }
    },
    async addUser(user) {
      try {
        const searchRequest = `${VK_URL}/friends.get?user_id=${user.id}&access_token=${this.apiKey}&v=5.131`;
        const data = await jsonp(searchRequest);
        if (data.response) {
          const userInfo = data.response;
          store.commit(ADD_USER, {
            id: user.id,
            user: {
              id: user.id,
              photo_100: user.photo_100,
              first_name: user.first_name,
              last_name: user.last_name,
              sex: user.sex,
              bdate: user.bdate,
              counters: { friends: userInfo.count },
              friendList: userInfo.items,
              isFriend: user.is_friend,
              inFriendWithAmount: 0,
            },
          });
        }
        if (data.error) {
          this.$emit("error", data.error.error_msg);
        }
      } catch (error) {
        this.$emit("error", error.message || error.statusText);
      }

      this.searchText = "";
      this.searchResult = [];
    },
  },
  components: {
    SearchResult,
  },
};
</script>

<style>
.search-input {
  width: 300px;
  height: 30px;
}
.more-button {
  padding: 5px 20px;
  background-color: cornflowerblue;
  border-color: cornflowerblue;
  cursor: pointer;
  color: white;
}
</style>
