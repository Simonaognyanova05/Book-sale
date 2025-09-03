import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function getPricesInfo() {
    try {
        const querySnapshot = await getDocs(collection(db, "prices"));

        if (!querySnapshot.empty) {
            const firstDoc = querySnapshot.docs[0];
            const data = { id: firstDoc.id, ...firstDoc.data() };
            console.log("✅ Взехме home info:", data);
            return data;
        } else {
            console.log("⚠️ Колекцията е празна!");
            return null;
        }
    } catch (error) {
        console.error("❌ Грешка при извличане на home info:", error);
        return null;
    }
}
