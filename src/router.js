import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./Home.vue"),
    meta: {
      tabs: ['RGB', 'HEX', 'HSL'],
      back: false,
      transition: 'slide-left', // 新增
    },
  },
  {
    path: "/:name",
    name: "Details",
    component: () => import("./Details.vue"),
    meta: {
      tabs: [],
      back: true,
      transition: 'slide-left', // 新增
    },
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.afterEach((to, from) => {
  // 新增
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  console.log("fromDepth", fromDepth);
  console.log("toDepth", toDepth);
  to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
})

export default router;
