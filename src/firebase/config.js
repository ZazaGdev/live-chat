import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDN9lwvLbxxiGhve0SdKSO6dtOhO7r3YGc",
    authDomain: "fir-intro-575ae.firebaseapp.com",
    projectId: "fir-intro-575ae",
    storageBucket: "fir-intro-575ae.appspot.com",
    messagingSenderId: "718659699898",
    appId: "1:718659699898:web:20e747f7a52489da216e83"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp}