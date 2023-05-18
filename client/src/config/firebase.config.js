// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBO1R0mnc6wbTRb1JYLYMU7lqrD-Q1VsVE',
	authDomain: 'other-life-store.firebaseapp.com',
	projectId: 'other-life-store',
	storageBucket: 'other-life-store.appspot.com',
	messagingSenderId: '127268568375',
	appId: '1:127268568375:web:9fe64e6523243eb360aeb2'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/* Auth module for register and login */
export const auth = getAuth(app);
