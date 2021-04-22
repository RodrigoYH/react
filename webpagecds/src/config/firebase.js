/**
 * @description Inicializar  la configuración y exportar la configuración
 */
 import firebase from "firebase/app";

 const firebaseConfig = {
   apiKey: "AIzaSyCSGdYHjspIMCqWy0bQx_SqOx-Zv6-a3q4",
   authDomain: "modelo-e8641.firebaseapp.com",
   projectId: "modelo-e8641",
   storageBucket: "modelo-e8641.appspot.com",
   messagingSenderId: "717521495536",
   appId: "1:717521495536:web:8857ed73f3ad1867b5e935"
 };
 
 export const firebaseApp = firebase.initializeApp(firebaseConfig);
