export default function ({
  store,
  redirect
}) {
  if (!store.state.isLoggedIn) {
    console.log(store.state.isLoggedIn, '-no')
    return redirect('/users/login')
  } else {
    console.log(store.state.isLoggedIn, '-yes')
    return redirect('/')
  }
}
