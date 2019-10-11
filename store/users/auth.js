import { tokenExpiry } from '~/.env'
// import { firebase, googleAuthProvider } from "~/plugins/firebase";

export const state = () => ({
    user: null,
    isloggedIn: ''
})

// // mutations
export const mutations = {
    setUser(state, data) {
        state.user = data;
    },
    
//     clearUser(state) {
//         console.log('Logout Successful');
//         state.user = null
//     }
}

export const getters = {
        authUser (state, getters, rootState) {
          return state.authId ? rootState.users.items[state.authId] : null
        },
        activeUser: (state, getters) => {
            return state.user
          }
      }
export const actions = {
    async fetch({ commit }) {
        try {
            const data = this.$cookies.get('user')
            commit('setUser', data)
            return data
        }
        catch (err) {
            commit('clearUser')
            commit('setErr', err, { root: true })
        }
    },
    async autoSignIn ({commit}, payload) {
        commit('setUser', payload)
      },
      signOut ({commit}) {
        auth.signOut().then(() => {
          commit('setUser', null)
        }).catch(err => console.log(error))
      },
    async registerUserWithEmailAndPassword ({dispatch}, {email, name, username, password, avatar = null}) {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => {
            return dispatch('users/createUser', {id: user.uid, email, name, username, password, avatar}, {root: true})
          })
          .then(() => dispatch('fetchAuthUser'))
      },
  
     async signInWithEmailAndPassword (context, account) {
         console.log(account);
         
        return firebase.auth().signInWithEmailAndPassword(account.email + '@graceclinic.com', account.password)
      },
    
}