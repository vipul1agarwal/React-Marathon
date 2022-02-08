import firebase from "firebase/app"
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAlrZi6Z7z4lWm2ex28o_2ThWVPaDPOC-Q",
    authDomain: "apisetu.firebaseapp.com",
    databaseURL: "https://apisetu-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "apisetu",
    storageBucket: "apisetu.appspot.com",
    messagingSenderId: "1072795478485",
    appId: "1:1072795478485:web:ba6257806bd938e53ef55c"
  };

  const fireDb = firebase.initializeApp(firebaseConfig)

  export default fireDb.database().ref()