import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD9uCmdauGEmx-ckKYNZsEMSM68NuhFzb0",
  authDomain: "gallery-5ab3b.firebaseapp.com",
  projectId: "gallery-5ab3b",
  storageBucket: "gallery-5ab3b.appspot.com",
  messagingSenderId: "1007574057403",
  appId: "1:1007574057403:web:c888b04b3da1e12180849e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };