import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: replace with your own config
// confignya didapat dari halaman firebase kalian
// bisa dicek di https://firebase.google.com/
const firebaseConfig = {
    apiKey: "AIzaSyAb8eUzJ4ZccO695NLiYPxmil-sCxPszok",
    authDomain: "mood-meter-c0cc8.firebaseapp.com",
    projectId: "mood-meter-13966",
    storageBucket: "mood-meter-c0cc8.appspot.com",
    messagingSenderId: "71756667198",
    appId: "1:71756667198:web:e227ade9eb0401df76b46f",
    measurementId: "G-YKPBJ9XBLH"
};

const app = initializeApp(firebaseConfig);
// ambil auth dari firebase di sini sekali aja biar bisa dipakai berkali-kali
const auth = getAuth(app);

//diexport
export { auth };