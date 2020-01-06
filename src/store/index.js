import Vue from "vue";
import Vuex from "vuex";
import UIModule from "./modules/ui";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ui: UIModule
  }
});
