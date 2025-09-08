import { useEffect, useState } from "react";
import { getOrders } from "../../services/getOrders";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import emailjs from "emailjs-com";
import "./Order.css";

export default function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const res = await getOrders();
            setOrders(res);
        } catch (err) {
            console.error("Грешка при зареждане на поръчки:", err);
        }
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Сигурни ли сте, че поръчката е изпълнена?");
        if (!confirmDelete) return;

        try {
            await deleteDoc(doc(db, "orders", id));
            fetchOrders();
        } catch (err) {
            console.error("Грешка при изтриване:", err);
        }
    };

    const sendConfirmationEmail = (order) => {
        emailjs.send(
            "service_m0ezr1g", // от EmailJS
            "template_4ugv2vu", // от EmailJS
            {
                to_name: order.name,
                to_email: order.email, // трябва да събираш имейл при поръчка
                message: `Здравейте ${order.name}, вашата поръчка беше приета успешно! След няколко дни ще бъде при Вас.`
            },
            "UGtKXqGnR4WTiD8xP" // от EmailJS
        ).then(
            (result) => {
                alert("✅ Имейл за потвърждение изпратен!");
                console.log(result.text);
            },
            (error) => {
                console.error("❌ Грешка при изпращане на имейл:", error.text);
            }
        );
    };

    return (
        <section className="login-section">
            <div className="messages-box">
                <h2>📨 Направени поръчки</h2>

                {orders.length > 0 ? (
                    <ul className="messages-list">
                        {orders.map((msg) => (
                            <li key={msg.id} className="message-item">
                                <div className="message-header">
                                    <h4>{msg.name}</h4>
                                    <span>{msg.phoneNumber}</span>
                                </div>
                                <p className="message-text">{msg.address}</p>
                                <div className="buttons">
                                    <button
                                        className="delete-btn"
                                        onClick={() => handleDelete(msg.id)}
                                    >
                                        ✅ Маркирай като изпълнена
                                    </button>
                                    <button
                                        className="email-btn"
                                        onClick={() => sendConfirmationEmail(msg)}
                                    >
                                        📧 Изпрати потвърждение
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="no-messages">Нямате нови съобщения.</p>
                )}
            </div>
        </section>
    );
}
