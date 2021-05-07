import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCwVjKu2LSxvfhKhDkduZbtqiNXXAkc9n8",
  authDomain: "crwn-db-2ccee.firebaseapp.com",
  projectId: "crwn-db-2ccee",
  storageBucket: "crwn-db-2ccee.appspot.com",
  messagingSenderId: "369207519357",
  appId: "1:369207519357:web:bbaad9c1a9f8d61783a914",
  measurementId: "G-GVG4VHSJTC",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        createdAt,
        email,
        ...additionalData,
      });
    } catch (err) {
      console.error(`error creating data ${err.message}`);
    }
  }

  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
