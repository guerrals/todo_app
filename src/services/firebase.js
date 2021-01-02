import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB3sGdG_mNBAuyVkFWFPrBI9SPafqDtRMk",
  authDomain: "todo-react-d2fca.firebaseapp.com",
  databaseURL: "https://todo-react-d2fca.firebaseio.com",
  projectId: "todo-react-d2fca",
  storageBucket: "todo-react-d2fca.appspot.com",
  messagingSenderId: "917261496078",
  appId: "1:917261496078:web:5ee421ae6bf3c1de18f15f"
};

// Initialize Firebase
if (firebase.app.length) {
  firebase.initializeApp(firebaseConfig)

  // firebase.app()
} else {
}
  

function firestore() {
    const firestore = firebase.firestore()
    return firestore
}

export default firestore
