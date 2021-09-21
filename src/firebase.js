import React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC2IXl7NmeqV_FTPkksQR3XY4pUZQAASRE",
    authDomain: "projectmanager-dd17f.firebaseapp.com",
    projectId: "projectmanager-dd17f",
    storageBucket: "projectmanager-dd17f.appspot.com",
    messagingSenderId: "1055580067315",
    appId: "1:1055580067315:web:3b101c7c465c517d9bae86"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export async function getData(table) {
    const query = await getDocs(collection(db, table));
    let query2 = query.listCollections();
    query.forEach((doc) => {
        return doc.id, '=>', doc.data()
    })
}



