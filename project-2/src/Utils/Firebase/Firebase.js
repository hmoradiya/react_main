// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    signOut,
    onAuthStateChanged
} from "firebase/auth"
import {
    getFirestore,
    doc,
    setDoc,
    getDoc, collection, writeBatch, query, getDocs
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBQK0c8Q09olKVRssz2WL0gA2dn1T9Huow",
    authDomain: "hardikstore-2023.firebaseapp.com",
    projectId: "hardikstore-2023",
    storageBucket: "hardikstore-2023.appspot.com",
    messagingSenderId: "737200539263",
    appId: "1:737200539263:web:9fe3ed6019d3a8bf13614a",
    measurementId: "G-4KKW9F5DR9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const addCollactionAndDocs = async (collectionKey, objectsToAdd, field) => {
    const collectionRef = collection(db, collectionKey);
    const batch =  writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object[field].toLowerCase())
        batch.set(docRef, object);
    });
    
    await batch.commit();
}  


export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
  
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  
    return categoryMap;
  };

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocs = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;
    const userRef = doc(db, 'users', userAuth.uid)

    const userData = await getDoc(userRef);

    if (!userData.exists())
    {   
        const {displayName, email} = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userRef, {
                displayName, email, createAt, ...additionalInformation
            })
        } catch(error) {
            console.log('error while creating user', error.message);
        }
    }
    return userRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    const response = createUserWithEmailAndPassword(auth, email, password)
    return response;
}

export const SignInAuthWithEmailAndPassword = async (email, password) => {
    const response = signInWithEmailAndPassword(auth, email, password)
    return response;
}

export const signOutUser = () => signOut(auth);

export const onAuthStateChangedListner = (callback) => {
    onAuthStateChanged(auth, callback)
}