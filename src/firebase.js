import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCyBNyW0D8Q74KFgjmIyPK3p8LH4XxQDnQ",
    authDomain: "blog-790f1.firebaseapp.com",
    projectId: "blog-790f1",
    storageBucket: "blog-790f1.appspot.com",
    messagingSenderId: "172156469112",
    appId: "1:172156469112:web:78b7e6494a550844f2528d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };