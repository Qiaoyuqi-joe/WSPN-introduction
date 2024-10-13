import { createRouter, createWebHistory } from "vue-router";
import Home from "../../views/Home.vue";
import Research from "../../views/Research.vue";
import News from "../../views/News.vue";
import AwardsFunds from "../../views/Awards_Funds.vue";
import Groups from "../../views/Groups.vue";
import Publications from "../../views/Publications.vue";
import Teaching from "../../views/Teaching.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/research", name: "Research", component: Research },
  { path: "/news", name: "News", component: News },
  { path: "/awards-funds", name: "AwardsFunds", component: AwardsFunds },
  { path: "/groups", name: "Groups", component: Groups },
  { path: "/Publications", name: "Publications", component: Publications },
  { path: "/teaching", name: "Teaching", component: Teaching },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
