import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDiGbsV0c85SdkYhe0U0Pt7cteucGc8P44",
	authDomain: "form-authorization-6bccd.firebaseapp.com",
	projectId: "form-authorization-6bccd",
	storageBucket: "form-authorization-6bccd.appspot.com",
	messagingSenderId: "667696711536",
	appId: "1:667696711536:web:1d59af1fb78a8b5445f1b5",
	measurementId: "G-GHH1HZ48HQ"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
