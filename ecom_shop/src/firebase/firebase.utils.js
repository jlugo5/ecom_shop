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

// 
export const createUserProfileDocument = async (user, displayName) => {
    // If user object doesnot exist we are not
    if(!user) return

    const userRef = firestore.doc(`users/${user.uid}`)
    // Erro was not get the info because in firestore rules was in false ********************************************
    const snapShot = await userRef.get()

    // If User Id does not exists
    if(!snapShot.exists){
        const {email} = user
        const createdAt = new Date()

        try{
            await userRef.set({
                displayName,
                email,
                createdAt
            })
        }
        catch(error){
            console.log("Error Creating a User Profile", error.message)
        }

    }
    return userRef
}

// Creating a new object from your authentication library for GoogleAuth Provider
const provider = new firebase.auth.GoogleAuthProvider()

// Setting the parameters to select an account prompt
provider.setCustomParameters({prompt:'select_account'})

// Executing this function SignInWithGoogle by calling signInWithPopup
// and providing the provider as the parameter for it using your auth library
export const signInwithGoogle = () => auth.signInWithPopup(provider)

export const signUpWithGoogle = () => {
    auth.signInWithPopup(provider).then(async function(result){
        try{
            if(!result.user) return

            createUserProfileDocument(result.user, result.user.displayName)
        }catch(error){
            console.log("Error: ", error.message)
        }
    }).catch(function(error){
        console.log("Error: ", error.message)
    })
}

export default firebase