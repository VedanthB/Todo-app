
  import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCykJoNFzpngVwxHpWGg3hVpr2gKfgYEWA",
        authDomain: "todo-app-d956e.firebaseapp.com",
        projectId: "todo-app-d956e",
        storageBucket: "todo-app-d956e.appspot.com",
        messagingSenderId: "592552738452",
        appId: "1:592552738452:web:a39fdef9e5ae47e7537e81",
        measurementId: "G-9YG3CZLZHT"
  });

  const db = firebaseApp.firestore();

  export default db ; 