import { updatePrices } from '../../services/updates/updatePrices';
import './PricesForm.css';
import { useState } from 'react';

export default function PricesForm() {
    const [formData, setFormData] = useState({
        description: "",
        orderType: "",
        priceLv: "",
        priceEuro: "",
        descriptionOffer: "",
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
        await updatePrices(formData); // извиква сървиза
    };
    return (
        <>
            <section class="login-section">
                <div class="login-box">
                    <h2>Редактиране на страница "Цени"</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="description" placeholder="Описание" value={formData.description}
                            onChange={handleChange} required />
                        <input type="text" name="orderType" placeholder="Тип поръчка" value={formData.orderType}
                            onChange={handleChange} required />
                        <input type="text" name="priceLv" placeholder="Цена в лв." value={formData.priceLv}
                            onChange={handleChange} required />
                        <input type="text" name="priceEuro" placeholder="Цена в евро" value={formData.priceEuro}
                            onChange={handleChange} required />
                        <input type="text" name="descriptionOffer" placeholder="Описание на офертата" value={formData.descriptionOffer}
                            onChange={handleChange} required />
                        <button type="submit">Редактирай</button>
                    </form>
                </div>
            </section>

        </>
    );
} 