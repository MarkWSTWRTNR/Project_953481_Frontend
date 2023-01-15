import { createStore } from "vuex";
import loginService from "../services/LoginService";
import router from "@/router";
export default createStore({
  state: {
    loggedIn: false,
    users: [
      {
        username: "Admin",
        password: "123456",
        favorites: [],
      },
    ]
  },
  actions: {
    login() {
      let result = loginService.login(
        this.state.username,
        this.state.password,
        this.state.users
      );
      if (result) {
        this.commit("loginSuccess");
        router.push("/home");
      } else {
        this.commit("loginFail");
        alert("Invalid username or password");
      }
    },
    logout() {
      this.commit("resetState");
      router.push("/home");
    },
  },
  mutations: {
    resetState(state) {
      this.state.loggedIn = false;
      state.currentUser = null;
    },
    loginSuccess(state) {
      state.loggedIn = true;
      state.username = "";
      state.password = "";
    },
    loginFail(state) {
      state.loggedIn = false;
      state.username = "";
      state.password = "";
    },
    setUsernameInput(state, input) {
      state.username = input;
    },
    setPasswordInput(state, input) {
      state.password = input;
    },
  },
  getters: {},
  modules: {},
});