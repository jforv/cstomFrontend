export default function ({
  store,
  redirect
}) {
  if (store.state.auth.loggedIn) {
    return redirect('/pages/login')
  } else {
    return redirect('/users/profile')
  }
}
