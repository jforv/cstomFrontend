// import { tokenExpiry } from '~/.env'
// import { firebase, googleAuthProvider, authentication } from "~/plugins/firebase";
// import { firestore } from 'firebase';

// export const state = () => ({
//     user: null,
// })

// // mutations
// export const mutations = {
//     setUser(state, data) {
//         state.user = data
//         state.username = data.displayName
//     },
//     clearUser(state) {
//         console.log('Logout Successful');
//         state.user = null
//     }
// }

// export const actions = {
//     async fetch({ commit }) {
//         try {
//             const data = this.$cookies.get('user')
//             commit('setUser', data)
//             return data
//         }
//         catch (err) {
//             commit('clearUser')
//             commit('setErr', err, { root: true })
//         }
//     },
//     createUser ({state, commit}, {id, email, name, username, avatar = null}) {
//         return new Promise((resolve, reject) => {
//           const registeredAt = Math.floor(Date.now() / 1000)
//           const usernameLower = username.toLowerCase()
//           email = email.toLowerCase()
//           const user = {avatar, email, name, username, usernameLower, registeredAt}
//           firebase.database().ref('users').child(id).set(user)
//             .then(() => {
//               commit('setItem', {resource: 'users', id: id, item: user}, {root: true})
//               resolve(state.items[id])
//             })
//         })
//       },
//     async emailRegister({ commit }, account) {
//         return authentication()
//         .createUserWithEmailAndPassword(account.email, account.password)
//         .then(
//             () => {
//               this.$router.push("/");
//             },
//             error => {
//               this.error = error.message;
//             });

//     },
//     async emailSignin({ commit }, account) {
//         return firebase.auth().signInWithEmailAndPassword(account.email, account.password)
//         .then(function (result) {
//             var token = result.credential.accessToken;
//             var user = result.user;
//             commit('setUser', { name: user.displayName, email: user.email, avatar: user.photoURL })
//             vm.$cookies.set('user', { name: user.displayName, email: user.email, avatar: user.photoURL }, { path: '/' })
//             vm.$cookies.set('Authorization', token, { path: '/', maxAge: tokenExpiry })
//         }).catch(function (error) {
//             var errorCode = error.code;
//             var email = error.email;
//             var credential = error.credential;
//             commit('setErr', { message: error.message, duration: 15000 }, { root: true })
//         });

//     },
//     async emailSignOut({ commit }, payload) {
//         const vm = this
//         authentication.signOut().then(function () {
//             commit('clearUser') // Removes user from Store
//             vm.$cookies.remove('Authorization')
//         }).catch(function (error) {
//             console.error(error);
//         });
//     },
//     async googleSignIn({ commit }) {
//         const vm = this
//         return firebase.auth().signInWithPopup(googleAuthProvider)
//             .then(function (result) {
//                 var token = result.credential.accessToken;
//                 var user = result.user;
//                 commit('setUser', { name: user.displayName, email: user.email, avatar: user.photoURL })
//                 vm.$cookies.set('user', { name: user.displayName, email: user.email, avatar: user.photoURL }, { path: '/' })
//                 vm.$cookies.set('Authorization', token, { path: '/', maxAge: tokenExpiry })
//             }).catch(function (error) {
//                 var errorCode = error.code;
//                 var email = error.email;
//                 var credential = error.credential;
//                 commit('setErr', { message: error.message, duration: 15000 }, { root: true })
//             });
//     },
//     async googleSignOut({ commit }, payload) {
//         const vm = this
//         firebase.auth().signOut().then(function () {
//             commit('clearUser') // Removes user from Store
//             vm.$cookies.remove('Authorization')
//         }).catch(function (error) {
//             console.error(error);
//         });
//     },
// }