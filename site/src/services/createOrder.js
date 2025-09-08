import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

export async function createOrder(data) {
    try {
        const docRef = await addDoc(collection(db, "orders"), {
            ...data,
            createdAt: new Date()
        });

        return { status: 200, message: "✅ Поръчката е създадена успешно! Ще получите имейл за потвърждение по-късно.", id: docRef.id };
    } catch (error) {
        console.error("Грешка при създаване на поръчка: ", error.message);

        if (error.message.includes("invalid") || error.message.includes("missing")) {
            return { status: 400, message: error.message };
        }

        return { status: 500, message: "⚠️ Възникна вътрешна грешка!" };
    }
}
