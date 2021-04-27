// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  import firebase from "firebase"

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC7ptiqhxvFKjQ8IGEGkDs3GU4mYKqcakQ",
    authDomain: "todo-app-sbm.firebaseapp.com",
    projectId: "todo-app-sbm",
    storageBucket: "todo-app-sbm.appspot.com",
    messagingSenderId: "814046850111",
    appId: "1:814046850111:web:497032d798a07685ec1c8a",
    measurementId: "G-1XVTJ6FV1X"
  });

  const db = firebaseApp.firestore();
  

  export default db ;