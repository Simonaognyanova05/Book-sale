import { createOrder } from '../../services/createOrder';
import './CreateOrder.css';
import { useState } from 'react';

export default function CreateOrder() {
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        address: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await createOrder(formData); // 👈 подаваме обект
        console.log(result);
        alert(result.message); // да видим дали стига до тук
    };

    return (
        <section className="login-section">
            <div className="login-box">
                <h2>Създаване на поддръжка</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Име и фамилия"
                           value={formData.name} onChange={handleChange} required />
                    <input type="text" name="phoneNumber" placeholder="Телефонен номер"
                           value={formData.phoneNumber} onChange={handleChange} required />
                    <input type="text" name="address" placeholder="Адрес"
                           value={formData.address} onChange={handleChange} required />
                    <button type="submit">Създаване</button>
                </form>
            </div>
        </section>
    );
}
