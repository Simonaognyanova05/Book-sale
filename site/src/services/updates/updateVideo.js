// services/updateHomeInfo.js
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export async function updateVideo(data) {
    try {
        // тук трябва да сложиш точния ID на документа от Firebase
        const homeRef = doc(db, "video", "efkUoU7jWHCiNJTwYph4");

        await updateDoc(homeRef, {
            description: data.description,
            video: data.video,
        });

        alert("Трета страница беше успешно обновена.");
    } catch (error) {
        alert("Грешка при обновяването: " + error.message);
    }
}
