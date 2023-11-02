// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyA6bnlcVioHKeRYsnMYDk69UiM24rA5Nk0",
  authDomain: "hospital-management-34bb5.firebaseapp.com",
  projectId: "hospital-management-34bb5",
  storageBucket: "hospital-management-34bb5.appspot.com",
  messagingSenderId: "283842654177",
  appId: "1:283842654177:web:12b19ee17bd2243eed2ca0",
  measurementId: "G-2B7M27BKVW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);