import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var config = {

}
!firebase.apps.length ? firebase.initializeApp(config) : ''
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const DB = firebase.database();
export default firebase