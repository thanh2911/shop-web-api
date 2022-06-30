import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfkrfc5sew_D8HGjxd8ZzYOcRedmTT6J0",
  authDomain: "shop-web-26e9c.firebaseapp.com",
  projectId: "shop-web-26e9c",
  storageBucket: "shop-web-26e9c.appspot.com",
  messagingSenderId: "214459430179",
  appId: "1:214459430179:web:3481ce6f3ce1f4d163c896",
  measurementId: "G-QQW8QNSJXY"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
