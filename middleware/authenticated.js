// export { state, redirect}
export default function({ store, redirect }) {
    if (!store.getters['users/isLoggedIn']) {
        redirect({ name: 'users/login' })
}else{
    redirect({ name: 'dashboard' })
}
}
// export default function ({ store, redirect, route }) {
//     store.state.user != null && route.name == 'login' ? redirect('/admin') : ''
//     store.state.user == null && isAdminRoute(route) ? redirect('/login') : ''
//   }
  
//   function isAdminRoute(route) {
//     if (route.matched.some(record => record.path == '/admin')) {
//       return true
//     }
//   }