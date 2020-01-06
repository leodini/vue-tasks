export default {
  state: {
    drawer: false,
    notifications: {
      display: false,
      text: "notification placeholder",
      timeout: 3000,
      alertClass: "success"
    }
  },
  mutations: {
    SET_DRAWER: (state, payload) => {
      state.drawer = payload;
    },
    SET_NOTIFICATION: (state, { display, text, alertClass }) => {
      state.notifications.display = display;
      state.notifications.text = text;
      state.notifications.alertClass = alertClass;
    }
  },
  getters: {
    DRAWER: state => {
      return state.drawer;
    },
    NOTIFICATION: state => {
      return state.notifications;
    }
  },
  actions: {}
};
