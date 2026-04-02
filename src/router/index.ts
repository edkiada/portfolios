import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "../views/mainView.vue";
import resumeView from "../views/resumeView.vue";
import projectView from '../views/projectView.vue';
import contactView from '../views/contactView.vue';

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/resume",
    name: "resume",
    component: resumeView,
  },
  {
    path: "/project",
    name: "project",
    component: projectView,
  },
  {
    path: "/contact",
    name: "contact",
    component: contactView,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;