import {initializeApp} from 'firebase/app';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEnx0a-EPQ_0tsK-hgHTLFdbvkVyLaGPY",
  authDomain: "manha-shanti.firebaseapp.com",
  projectId: "manha-shanti",
  storageBucket: "manha-shanti.appspot.com",
  messagingSenderId: "92635398456",
  appId: "1:92635398456:web:1c46401220447a698f01cd"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export {db}
export default app;
