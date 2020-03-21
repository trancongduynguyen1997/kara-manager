const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "dashboard", component: () => import("pages/Dashboard.vue") },
      { path: "manager", component: () => import("pages/ManagerPage.vue") }
    ]
  },
  {
    path: "/",
    component: () => import("layouts/LoginRegisterLayout.vue"),
    children: [
      { path: "/login", component: () => import("pages/LoginPage.vue") }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
