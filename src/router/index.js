import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
// import Preview from '../views/Preview.vue'


Vue.use(VueRouter)



const routes = [
  // {
  //   path: "/",
  //   name: "Preview",
  //   meta: {
  //     title: 'Preview'
  //   },
  //   component: Preview,
  // },
  // {
  //   path: "/home-light",
  //   name: "HomeLight",
  //   meta: {
  //     title: 'Home Light'
  //   },
  //   component: () =>
  //     import("../views/HomeLight.vue"),
  // },
  {
    path: "/",
    name: "Home",
    meta: {
      title: 'Home'
    },
    component: () =>
      import("../views/Home.vue"),
  },

  {
    path: '*',
    name: NotFound,
    meta: {
      title: '404'
    },
    component: ()=> import("../views/NotFound.vue")
  }
];
const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})


router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title =  'Umang Patel';
  }
});


export default router;