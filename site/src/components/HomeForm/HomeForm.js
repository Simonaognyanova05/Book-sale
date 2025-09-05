import './HomeForm.css';
import { useState } from "react";
import { updateHomeInfo } from "../../services/updateHomeInfo";

export default function HomeForm() {
    const [formData, setFormData] = useState({
        title: "",
        description: ""
    });

    // обновява state при промяна в инпутите
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // изпраща към Firebase
    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateHomeInfo(formData); // извиква сървиза
    };

    return (
        <section className="login-section">
            <div className="login-box">
                <h2>Редактиране на начална страница</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Заглавие"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Описание"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Редактирай</button>
                </form>
            </div>
        </section>
    );
}
