// services/updateHomeInfo.js
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export async function updateHomeInfo(data) {
    try {
        // тук трябва да сложиш точния ID на документа от Firebase
        const homeRef = doc(db, "home", "mlWyDnEje56IMh6JFEQ7");

        await updateDoc(homeRef, {
            title: data.title,
            description: data.description
        });

        alert("Началната страница беше успешно обновена.");
    } catch (error) {
        alert("Грешка при обновяването: " + error.message);
    }
}
