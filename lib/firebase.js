// import the functions needed from the SDKs needed
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAJ8G8S3Erxpct5Dm00vcOrkh-y6RgXyQs",
  authDomain: "mario-club-project.firebaseapp.com",
  projectId: "mario-club-project",
  storageBucket: "mario-club-project.firebasestorage.app",
  messagingSenderId: "607965460645",
  appId: "1:607965460645:web:6e5a8f1f36e1fbd426754c",
  measurementId: "G-MJ18SZ1BJB"
};

// initialize firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);