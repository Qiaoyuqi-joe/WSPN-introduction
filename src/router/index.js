import { createRouter, createWebHistory } from 'vue-router';
import Home from '../../views/Home.vue';
import Papers from '../../views/Pappers.vue';
import AwardsFunds from '../../views/Awards_Funds.vue';
import Groups from '../../views/Groups.vue';
import Talks from '../../views/Talks.vue';
import Teaching from '../../views/Teaching.vue';
import Services from '../../views/Services.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/papers', name: 'Papers', component: Papers },
  { path: '/awards-funds', name: 'AwardsFunds', component: AwardsFunds },
  { path: '/groups', name: 'Groups', component: Groups },
  { path: '/talks', name: 'Talks', component: Talks },
  { path: '/teaching', name: 'Teaching', component: Teaching },
  { path: '/service', name: 'Services', component: Services }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;