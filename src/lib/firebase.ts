import { getApps, initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyCiCzA_SObRyPt70ws93XFDZXzsjOCBcQc",
  authDomain: "pupila-optical-center.firebaseapp.com",
  projectId: "pupila-optical-center",
  storageBucket: "pupila-optical-center.firebasestorage.app",
  messagingSenderId: "822120692612",
  appId: "1:822120692612:web:95f20cbf419063f79ebbd1",
  measurementId: "G-XPF5L0XFCJ",
};

export const firebaseApp = getApps()[0] ?? initializeApp(firebaseConfig);
