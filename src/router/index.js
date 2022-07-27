import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import FriendView from "../views/FriendView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Main,
  },
  {
    path: "/friend/:id",
    name: "friend",
    component: FriendView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
