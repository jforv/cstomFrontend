export const state = {
  state: {
    isLoggedIn: !!localStorage.getItem("token")
  }
export const getters = {
  isAuthenticated(state) {
    return state.users.auth.loggedIn;
  },

  loggedInUser(state) {
    return state.auth.users.getUser;
  }
}
