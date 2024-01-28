// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage, ref } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1mKSZpWX5VrLZj7LM6zggg8-BHASrBSo",
  authDomain: "greeno-2a8b5.firebaseapp.com",
  databaseURL: "https://greeno-2a8b5-default-rtdb.firebaseio.com",
  projectId: "greeno-2a8b5",
  storageBucket: "greeno-2a8b5.appspot.com",
  messagingSenderId: "685964402650",
  appId: "1:685964402650:web:623cc3d7e44cce8133eae3",
  measurementId: "G-9HEGCE4GC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const storageRef = ref(storage);
export const auth = getAuth(app);
export const database = getDatabase(app);
