import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

 const fbConfig = {
    apiKey: "AIzaSyCIPG_xmq2Tm-vwu5y2YjcBUbC-rXHxgxI",
    authDomain: "nn-cms-c7400.firebaseapp.com",
    databaseURL: "https://nn-cms-c7400.firebaseio.com",
    projectId: "nn-cms-c7400",
    storageBucket: "nn-cms-c7400.appspot.com",
    messagingSenderId: "928895076809",
    appId: "1:928895076809:web:8e6f61d8a9911bc1"
};

firebase.initializeApp(fbConfig)
firebase.firestore()

export {firebase}