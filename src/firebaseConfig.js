// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdwncil48ljf6cpGFe0TTPYiZDfZr7YOE",
  authDomain: "authentication-42b56.firebaseapp.com",
  projectId: "authentication-42b56",
  storageBucket: "authentication-42b56.appspot.com",
  messagingSenderId: "49019729212",
  appId: "1:49019729212:web:5bf84d60e56505ec9f9a39",
  measurementId: "G-BLP4GENYPE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()


export { app, auth }

const analytics = getAnalytics(app);