// Firebase configuration and initialization
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC1abj5dxxgBNllaBPHVkMa93Qj0H7yNEM",
  authDomain: "matchdeck-a73e0.firebaseapp.com",
  projectId: "matchdeck-a73e0",
  storageBucket: "matchdeck-a73e0.firebasestorage.app",
  messagingSenderId: "224053954036",
  appId: "1:224053954036:web:37d36ad9216e94d66e25a1",
  measurementId: "G-VSW8X7BP2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;
