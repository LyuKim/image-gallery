import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, setDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAlMPmJuOQmFDwkwJTH8NDj9thNWh9ceUA",
  authDomain: "image-gallery-60f83.firebaseapp.com",
  projectId: "image-gallery-60f83",
  storageBucket: "image-gallery-60f83.firebasestorage.app",
  messagingSenderId: "278883072866",
  appId: "1:278883072866:web:7f8672e37a728c2cf5ca3b",
  measurementId: "G-L1NZ6JVC9P"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth as default, auth, provider, signInWithPopup, signOut, onAuthStateChanged, db };

// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   signInWithPopup,
//   GoogleAuthProvider,
//   signOut,
//   onAuthStateChanged
// } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyAlMPmJuOQmFDwkwJTH8NDj9thNWh9ceUA",
//   authDomain: "image-gallery-60f83.firebaseapp.com",
//   projectId: "image-gallery-60f83",
//   storageBucket: "image-gallery-60f83.firebasestorage.app",
//   messagingSenderId: "278883072866",
//   appId: "1:278883072866:web:7f8672e37a728c2cf5ca3b",
//   measurementId: "G-L1NZ6JVC9P"
// };

// // Инициализируем Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app); // Создаём auth
// const provider = new GoogleAuthProvider();

// // Экспортируем всё явно
// export {
//   auth as default,
//   auth,
//   getAuth,
//   signInWithPopup,
//   signOut,
//   onAuthStateChanged,
//   provider
// };
