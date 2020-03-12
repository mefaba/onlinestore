import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth"
/* import { userRef } from 'react'; */


const firebaseConfig = {
    apiKey: "AIzaSyAinwkKlVK7sqqZ7DUQJ5axQd21RyCpZ68",
    authDomain: "onlinestore-db-6e30f.firebaseapp.com",
    databaseURL: "https://onlinestore-db-6e30f.firebaseio.com",
    projectId: "onlinestore-db-6e30f",
    storageBucket: "onlinestore-db-6e30f.appspot.com",
    messagingSenderId: "1071064397696",
    appId: "1:1071064397696:web:9ecf883d364ef43e7e3365",
    measurementId: "G-ZCBC2W8VBP"
  };


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;