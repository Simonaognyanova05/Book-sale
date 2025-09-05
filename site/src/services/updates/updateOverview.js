// services/updateHomeInfo.js
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export async function updateOverview(data) {
    try {
        // тук трябва да сложиш точния ID на документа от Firebase
        const homeRef = doc(db, "overview", "JcoqZdwFWI7nUvcWJKhB");

        await updateDoc(homeRef, {
            description: data.description,
            quote1: data.quote1,
            quote2: data.quote2,
            quote3: data.quote3,
            quote4: data.quote4,
            quote5: data.quote5,
            quote6: data.quote6,
            quote7: data.quote7,
            quote8: data.quote8,

        });

        alert("Втора страница беше успешно обновена.");
    } catch (error) {
        alert("Грешка при обновяването: " + error.message);
    }
}
