<template>
  <form action="" @submit.prevent="addFriend(searchText)">
    <input type="text" v-model="searchText" @input="onInput(searchText)" />
    <button>ADD</button>
  </form>
  <button @click="mock">Mock</button>
</template>

<script>
import store from "@/store";
import { ADD_FRIEND, MOCK_DATA } from "@/store/mutationTypes";

const mockData = new Map();
mockData.set(1, {
  id: 1,
  imgUrl: "imgUrl",
  name: "Alex",
  surname: "Lenz",
  sex: "male",
  age: 21,
  friendsAmount: 6,
  friendList: [2, 4, 5, 6, 8, 9],
});
mockData.set(2, {
  id: 2,
  imgUrl: "imgUrl",
  name: "Nik",
  surname: "Gog",
  sex: "male",
  age: 34,
  friendsAmount: 5,
  friendList: [1, 3, 5, 7, 10],
});
mockData.set(3, {
  id: 3,
  imgUrl: "imgUrl",
  name: "Nadi",
  surname: "Gog",
  sex: "female",
  age: 33,
  friendsAmount: 7,
  friendList: [2, 4, 5, 6, 8, 9, 10],
});
mockData.set(4, {
  id: 4,
  imgUrl: "imgUrl",
  name: "Anna",
  surname: "Reba",
  sex: "female",
  age: 27,
  friendsAmount: 5,
  friendList: [1, 3, 7, 8, 9],
});
mockData.set(5, {
  id: 5,
  imgUrl: "imgUrl",
  name: "Gleb",
  surname: "Tura",
  sex: "male",
  age: 39,
  friendsAmount: 4,
  friendList: [1, 2, 3, 10],
});
mockData.set(6, {
  id: 6,
  imgUrl: "imgUrl",
  name: "Nina",
  surname: "Salo",
  sex: "female",
  age: 21,
  friendsAmount: 6,
  friendList: [1, 3, 7, 8, 9, 10],
});
mockData.set(7, {
  id: 7,
  imgUrl: "imgUrl",
  name: "Rex",
  surname: "Wenz",
  sex: "male",
  age: 26,
  friendsAmount: 5,
  friendList: [2, 4, 6, 8, 9],
});
mockData.set(8, {
  id: 8,
  imgUrl: "imgUrl",
  name: "Rud",
  surname: "Deva",
  sex: "female",
  age: 29,
  friendsAmount: 5,
  friendList: [1, 3, 4, 6, 7],
});

mockData.set(9, {
  id: 9,
  imgUrl: "imgUrl",
  name: "Dory",
  surname: "Ture",
  sex: "female",
  age: 32,
  friendsAmount: 5,
  friendList: [1, 3, 4, 6, 7],
});

mockData.set(10, {
  id: 10,
  imgUrl: "imgUrl",
  name: "Victor",
  surname: "Kram",
  sex: "male",
  age: 31,
  friendsAmount: 4,
  friendList: [2, 3, 5, 6],
});

export default {
  name: "AddFiendForm",
  data() {
    return {
      searchText: "",
      searchList: [],
    };
  },
  props: {
    onInput: { type: Function, required: true },
  },
  methods: {
    addFriend(text) {
      store.commit(ADD_FRIEND, {
        id: +new Date(),
        friend: {
          id: +new Date(),
          imgUrl: "qweqrwwe",
          name: text,
          surname: "qwer",
          sex: "male",
          age: 21,
          friendsAmount: 56,
          friendList: [1, 2, 3, 4, 5],
        },
      });
      this.searchText = "";
      console.log(store.getters.getFriendList);
    },
    searchFriends() {},
    mock() {
      store.commit(MOCK_DATA, mockData);
    },
  },
};
</script>
