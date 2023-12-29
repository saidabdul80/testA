import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './../views/Dashboard.vue';
import Projects from './../views/Projects.vue';
import Login from './../views/Login.vue';
import AIGuru from './../views/AIGuru.vue';
import IndexPage from '../IndexPage.vue';

const routes = [
  {
    path: '/',
    component: IndexPage, // Load the App.vue as the layout
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
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/ai-guru',
    name: 'AIGuru',
    component: AIGuru,
  },
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
