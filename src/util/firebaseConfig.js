import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBhBk_g6fDfsEC3CHYZKHTCeBKTl0Dk0EU",
  authDomain: "everything-books-3157d.firebaseapp.com",
  databaseURL: "https://everything-books-3157d-default-rtdb.firebaseio.com",
  projectId: "everything-books-3157d",
  storageBucket: "everything-books-3157d.firebasestorage.app",
  messagingSenderId: "557035952598",
  appId: "1:557035952598:web:3d1a6a02a0829cdd02ac77",
  measurementId: "G-Z8KHLR72XZ",
};

export const app = initializeApp(firebaseConfig);
