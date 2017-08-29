import firebase from 'firebase';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCtGdGEgJRGffb7B6iDIwjc5oIZIFt2bZs",
  authDomain: "myreactapp-cb46f.firebaseapp.com",
  databaseURL: "https://myreactapp-cb46f.firebaseio.com",
  projectId: "myreactapp-cb46f",
  storageBucket: "",
  messagingSenderId: "518128686171"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
