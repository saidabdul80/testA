import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './../views/Dashboard.vue';
import Projects from './../views/Projects.vue';

const routes = [
  {
    path: '/',
    component: () => import('./../indexPage.vue'), // Load the App.vue as the layout
    children: [
      {
        path: '', // Default child route
        redirect: '/dashboard', // Redirect to the dashboard
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
      },
      {
        path: '/projects',
        name: 'projects',
        component: Projects,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
