// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjgWgnHcr17eNyHtqS-NOLK8M-D_qer48",
  authDomain: "lit-rides-7d063.firebaseapp.com",
  projectId: "lit-rides-7d063",
  storageBucket: "lit-rides-7d063.appspot.com",
  messagingSenderId: "180063856690",
  appId: "1:180063856690:web:7a353254514a03b16af42b",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { auth, firebaseConfig };
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
