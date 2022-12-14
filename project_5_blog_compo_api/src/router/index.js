import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import RefDemo from "@/views/RefDemo.vue";
import ReactiveDemo from "@/views/ReactiveDemo.vue";
import ComputedDemo from "@/views/ComputedDemo.vue";
import PostDetails from "@/views/PostDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/refDemo",
    name: "refDemo",
    component: RefDemo,
  },
  {
    path: "/reactiveDemo",
    name: "reactiveDemo",
    component: ReactiveDemo,
  },
  {
    path: "/computedDemo",
    name: "computedDemo",
    component: ComputedDemo,
  },
  {
    path: "/posts/:id",
    name: "details",
    component: PostDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
