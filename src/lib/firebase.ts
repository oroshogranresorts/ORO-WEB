import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqEGbI9TZgNOgdqiAceekNaMblLWFrdZU",
  authDomain: "oroshograndash.firebaseapp.com",
  projectId: "oroshograndash",
  storageBucket: "oroshograndash.firebasestorage.app",
  messagingSenderId: "907210804541",
  appId: "1:907210804541:web:379b57d3d699d548d84954",
  measurementId: "G-TN9R19DSBJ"
};

export const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
