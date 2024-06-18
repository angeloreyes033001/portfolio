import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/resume',
      name: "resume",
      component: ()=>import('@/views/ResumeView.vue'),
      children:[
        {
          path: "",
          name: "about",
          component: ()=>import("@/components/Resume-Partial/About.vue")
        },
        {
          path: "education",
          name: "education",
          component: ()=>import("@/components/Resume-Partial/Education.vue")
        },
        {
          path: "certificate",
          name: "certificate",
          component: ()=>import("@/components/Resume-Partial/Certificate.vue")
        },
        {
          path: "skill",
          name: "skill",
          component: ()=>import("@/components/Resume-Partial/Skill.vue")
        },
      ]
    },
    {
      path:'/project',
      name: "projet",
      component: ()=>import('@/views/ProjectView.vue')
    },
    {
      path:'/contact',
      name: "contact",
      component: ()=>import('@/views/ContactView.vue')
    }
  ]
})

export default router
