import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var config = {
apiKey: "AIzaSyApn1yDyoWp9MG_eWtybja4SB5PR-Z-gzw",
authDomain: "graceclinic-97af9.firebaseapp.com",
databaseURL: "https://graceclinic-97af9.firebaseio.com",
projectId: "graceclinic-97af9",
storageBucket: "graceclinic-97af9.appspot.com",
messagingSenderId: "554552617490",
appId: "1:554552617490:web:147a4b4a027315ab6b46cb"
}
!firebase.apps.length ? firebase.initializeApp(config) : ''
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const DB = firebase.database();
export default firebase