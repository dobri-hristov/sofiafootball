import { initializeApp } from "firebase/app";

const firebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyAHWdq9GQrmSw_Mo2b2JZe8t_SJZMvHtt8",
        authDomain: "sofiafootball-d8a73.firebaseapp.com",
        databaseURL: "https://sofiafootball-d8a73-default-rtdb.firebaseio.com",
        projectId: "sofiafootball-d8a73",
        storageBucket: "sofiafootball-d8a73.appspot.com",
        messagingSenderId: "453457919123",
        appId: "1:453457919123:web:9eaa1b8e5766e603d52166"
      };

    initializeApp(firebaseConfig)
}

export default firebase
