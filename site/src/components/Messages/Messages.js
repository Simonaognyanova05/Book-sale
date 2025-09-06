// src/components/Messages.js
import { useEffect, useState } from "react";
import { getMessages } from "../../services/getMessages";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import "./Messages.css";

export default function Messages() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const res = await getMessages();
            setMessages(res);
        } catch (err) {
            console.error("Грешка при зареждане на съобщения:", err);
        }
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Сигурни ли сте, че съобщението е прочетено?");
        if (!confirmDelete) return;

        try {
            await deleteDoc(doc(db, "messages", id));
            fetchMessages();
        } catch (err) {
            console.error("Грешка при изтриване:", err);
        }
    };

    return (
        <section class="login-section">
            <div className="messages-box">
                <h2>📨 Изпратени съобщения</h2>

                {messages.length > 0 ? (
                    <ul className="messages-list">
                        {messages.map((msg) => (
                            <li key={msg.id} className="message-item">
                                <div className="message-header">
                                    <h4>{msg.name}</h4>
                                    <span>{msg.email}</span>
                                </div>
                                <p className="message-text">{msg.message}</p>
                                <button
                                    className="delete-btn"
                                    onClick={() => handleDelete(msg.id)}
                                >
                                    ✅ Маркирай като прочетено
                                </button>
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
