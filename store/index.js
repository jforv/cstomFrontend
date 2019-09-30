export const getters = {
  isAuthenticated(state) {
    return state.users.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.users.getUser
  }
}
