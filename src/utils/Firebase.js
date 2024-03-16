// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgcXjWK0Ln2fqj-rDx1wETXkkti4JnxiM",
    authDomain: "felicitapp-fe66c.firebaseapp.com",
    projectId: "felicitapp-fe66c",
    storageBucket: "felicitapp-fe66c.appspot.com",
    messagingSenderId: "1089788912297",
    appId: "1:1089788912297:web:179e3f44082c7bd4f83fb8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);