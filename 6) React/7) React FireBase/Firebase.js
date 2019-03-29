import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyBni5cNATD6_hEIOuI3y6Ftn-o5avk7xNY",
    authDomain: "pruebasfirebase-d0881.firebaseapp.com",
    databaseURL: "https://pruebasfirebase-d0881.firebaseio.com",
    projectId: "pruebasfirebase-d0881",
    storageBucket: "pruebasfirebase-d0881.appspot.com",
    messagingSenderId: "236031632898"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;