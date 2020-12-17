import firebase from 'firebase/app'
import 'firebase/firestore' // For Database
import 'firebase/auth' // For Authentication


const config = {
    apiKey: "AIzaSyCjKD9TUUdKyzSinrYv-jEdyY5o79EYqbo",
    authDomain: "ecom-shop-899cc.firebaseapp.com",
    projectId: "ecom-shop-899cc",
    storageBucket: "ecom-shop-899cc.appspot.com",
    messagingSenderId: "235232195313",
    appId: "1:235232195313:web:a5fd84af741792f6e0af50",
    measurementId: "G-BXB3MEL47K"
}

// Initializes the App
firebase.initializeApp(config)

// Assigning your firebase authentication library
export const auth = firebase.auth()

// Assigning your firebase firestore library
export const firestore = firebase.firestore()

// Creating a new object from your authentication library for GoogleAuth
const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({prompt:'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase