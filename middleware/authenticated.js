// export { state, redirect}
export default function({ store, redirect }) {
    if (store.getters['users/isLoggedIn']) {
        redirect({ name: 'dashboard' });
}
}