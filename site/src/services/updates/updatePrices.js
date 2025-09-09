// services/updateHomeInfo.js
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export async function updatePrices(data) {
    try {
        // тук трябва да сложиш точния ID на документа от Firebase
        const homeRef = doc(db, "prices", "b8s5qXMBC2CGDpzyIdPV");

        await updateDoc(homeRef, {
            description: data.description,
            orderType: data.orderType,
            priceLv: data.priceLv,
            priceEuro: data.priceEuro,
            descriptionOffer: data.descriptionOffer,

        });

        alert("Пета страница беше успешно обновена.");
    } catch (error) {
        alert("Грешка при обновяването: " + error.message);
    }
}
