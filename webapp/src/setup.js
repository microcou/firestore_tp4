import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

const firebaseConfig = {
	// TODO
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
connectAuthEmulator(auth, "http://127.0.0.1:9099", { disableWarnings: true });

const db = getFirestore();
connectFirestoreEmulator(db, "127.0.0.1", 8080);

export { app, auth, db };
