import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Todo from "./components/Todo";
import Tasks from "./components/Tasks";
import NotesModal from "./components/NotesModal";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: Login,
    name: "login"
  },
  {
    path: "/signup",
    component: Signup,
    name: "signup"
  },
  {
    path: "/",
    component: Todo,
    name: "todo",
    children: [
      {
        path: "list/:id",
        components: { tasks: Tasks },
        name: "tasks",
        children: [
          {
            path: "task/:id",
            components: { notes: NotesModal },
            name: "notes"
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
  base: "/"
});

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");
