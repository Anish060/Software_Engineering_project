import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCGjSgiPTNChZU_kx3Sg1ChiLcZ2vA-aPg",
  authDomain: "software-iip-gdsc.firebaseapp.com",
  projectId: "software-iip-gdsc",
  storageBucket: "software-iip-gdsc.appspot.com", // NOTE: this should be .appspot.com
  messagingSenderId: "795897743079",
  appId: "1:795897743079:web:64b738f2f61fee79de0442",
  measurementId: "G-NHNV15JNRX"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
