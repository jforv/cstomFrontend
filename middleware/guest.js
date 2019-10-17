export default function ({
  store,
  redirect
}) {
  if (!store.state.isLoggedIn) {
    console.log(store.state.isLoggedIn, '-no')
    return redirect('/')
  } 
}
