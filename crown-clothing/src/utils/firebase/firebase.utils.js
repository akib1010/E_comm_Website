import {initializeApp} from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVaGwdYLnFbvbrD5O5l003ex8VW0K_60I",
    authDomain: "crown-clothing-db-bc311.firebaseapp.com",
    projectId: "crown-clothing-db-bc311",
    storageBucket: "crown-clothing-db-bc311.appspot.com",
    messagingSenderId: "128565166289",
    appId: "1:128565166289:web:e501ad04a6a24d03b805f0"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
    
  export const db= getFirestore()

  export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot.exists())

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo,
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userDocRef

  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createAuthUserWithEmailAndPassword(auth, email, password)
  }