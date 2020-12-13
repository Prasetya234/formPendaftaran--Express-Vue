import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/pendaftarans",
      name: "pendaftarans",
      component: () => import("./components/PendaftaransList")
    },
    {
      path: "/pendaftarans/:id",
      name: "pendaftaran-details",
      component: () => import("./components/Pendaftaran")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddPendaftaran")
    }
  ]
});