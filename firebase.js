import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDfScbwHmT0D4E5LOdnAMRsWe38m_yPEGU",
    authDomain: "notes-924d1.firebaseapp.com",
    databaseURL: "https://notes-924d1.firebaseio.com",
    projectId: "notes-924d1",
    storageBucket: "notes-924d1.appspot.com",
    messagingSenderId: "815593242532",
    appId: "1:815593242532:web:3f05e43342a37b2c050b31",
    measurementId: "G-2G76TFK7YG"
};



export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
