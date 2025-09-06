import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

export async function sendComment(name, comment) {
    try {
        const docRef = await addDoc(collection(db, "comments"), {
            name,
            comment,
            createdAt: new Date()
        });

        return { status: 200, message: "Коментарът не е изпратено успешно!" };
    } catch (error) {
        console.error("Грешка при създаване на продукта: ", error.message);

        if (error.message.includes("invalid") || error.message.includes("missing")) {
            return { status: 400, message: error.message };
        }

        return { status: 500, message: "Възникна вътрешна грешка!" };
    }
}