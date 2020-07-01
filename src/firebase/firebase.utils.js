import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAnQqvlXphG7oAOGjJ0KKGckpCJUdkbofI",
    authDomain: "crwn-db-bac7c.firebaseapp.com",
    databaseURL: "https://crwn-db-bac7c.firebaseio.com",
    projectId: "crwn-db-bac7c",
    storageBucket: "crwn-db-bac7c.appspot.com",
    messagingSenderId: "1054356908521",
    appId: "1:1054356908521:web:5f4ff130b41c5d52134378"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;