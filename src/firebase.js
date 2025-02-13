import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD5oczDbQfg-E3itL8eqrffg8h5FsUyrkA",
    authDomain: "quick-notes-2c941.firebaseapp.com",
    projectId: "quick-notes-2c941",
    storageBucket: "quick-notes-2c941.firebasestorage.app",
    messagingSenderId: "305627299202",
    appId: "1:305627299202:web:64d9751922a93dcc82639b",
    measurementId: "G-QXCH7QBYMC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
