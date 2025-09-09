// services/updateHomeInfo.js
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export async function updateAuthor(data) {
    try {
        // тук трябва да сложиш точния ID на документа от Firebase
        const homeRef = doc(db, "author", "vtZYpW5UUf1KCxKREAAH");

        await updateDoc(homeRef, {
            names: data.names,
            description: data.description,
            signature: data.signature,
            facebook: data.facebook,
            instagram: data.instagram,
            linkedIn: data.linkedIn,
            img: data.img,

        });

        alert("Четвърта страница беше успешно обновена.");
    } catch (error) {
        alert("Грешка при обновяването: " + error.message);
    }
}
