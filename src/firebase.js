import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAdLsr3vuc8ToNV5AY0RlthpYY29DYQxw8",
    authDomain: "man-city-e31a3.firebaseapp.com",
    databaseURL: "https://man-city-e31a3.firebaseio.com",
    projectId: "man-city-e31a3",
    storageBucket: "man-city-e31a3.appspot.com",
    messagingSenderId: "350515000945",
    appId: "1:350515000945:web:7f2861f349222015358dd0",
    measurementId: "G-9S24GP9VH9"
     };

     firebase.initializeApp(firebaseConfig);
     
     const firebaseDB = firebase.database();
     const firebaseMatches = firebaseDB.ref('matches');
     const firebasePromotions = firebaseDB.ref('promotions');

     export {
         firebase,
         firebaseMatches,
         firebasePromotions
     }
