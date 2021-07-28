import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyBdO3QSwROzqcn-RsJxTnOghXMz-ZWjrfU",
    authDomain: "chat-tm-c7ea2.firebaseapp.com",
    projectId: "chat-tm-c7ea2",
    storageBucket: "chat-tm-c7ea2.appspot.com",
    messagingSenderId: "169367922242",
    appId: "1:169367922242:web:8800cad8da10180a2a2fdb",
    measurementId: "G-7NCL83J5V0"
    }
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

