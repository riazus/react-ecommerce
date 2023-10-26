import app from "firebase/app";
import "firebase/auth/";

const firebaseConfig = {
  apiKey: "AIzaSyBQB0VjdylLk6uDXT2UTQWkCKAQ4_YLHw4",
  authDomain: "marvel-quize-fd9f3.firebaseapp.com",
  projectId: "marvel-quize-fd9f3",
  storageBucket: "marvel-quize-fd9f3.appspot.com",
  messagingSenderId: "941926771918",
  appId: "1:941926771918:web:ec33a43e5af51393d5b49f",
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
  }

  // register
  signupUser = (email, password) => {
    this.auth.createUserWithEmailAndPassword(email, password);
  };

  // connection
  loginUser = (email, password) => {
    this.auth.signInWithEmailAndPassword(email, password);
  };

  // deconnection
  signoutUser = () => {
    this.auth.signOut();
  };
}

export default Firebase;
