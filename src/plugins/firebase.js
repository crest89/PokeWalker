import { initializeApp }from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDUES8kl1XDw_AMN1Qe4Iv5RN4wDQ7lxSA",
  authDomain: "pokewalker-ea8ac.firebaseapp.com",
  projectId: "pokewalker-ea8ac",
  storageBucket: "pokewalker-ea8ac.appspot.com",
  messagingSenderId: "439087635282",
  appId: "1:439087635282:web:4230d726570dbaefd1388b",
  measurementId: "G-FT2241405F"
});
const fb = getFirestore()

export default fb
