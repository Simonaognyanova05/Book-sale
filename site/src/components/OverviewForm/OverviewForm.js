import { updateOverview } from '../../services/updates/updateOverview';
import './OverviewForm.css';
import { useState } from 'react';

export default function OverviewForm() {
    const [formData, setFormData] = useState({
        description: "",
        quote1: "",
        quote2: "",
        quote3: "",
        quote4: "",
        quote5: "",
        quote6: "",
        quote7: "",
        quote8: "",
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
        await updateOverview(formData); // извиква сървиза
    };

    return (
        <>
            <section class="login-section">
                <div class="login-box">
                    <h2>Редактиране на обща страница</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="description" placeholder="Описание" value={formData.description}
                            onChange={handleChange} required />
                        <input type="text" name="quote1" placeholder="Цитат от глава 1" value={formData.quote1}
                            onChange={handleChange} required />
                        <input type="text" name="quote2" placeholder="Цитат от глава 2" value={formData.quote2}
                            onChange={handleChange} required />
                        <input type="text" name="quote3" placeholder="Цитат от глава 3" value={formData.quote3}
                            onChange={handleChange} required />
                        <input type="text" name="quote4" placeholder="Цитат от глава 4" value={formData.quote4}
                            onChange={handleChange} required />
                        <input type="text" name="quote5" placeholder="Цитат от глава 5" value={formData.quote5}
                            onChange={handleChange} required />
                        <input type="text" name="quote6" placeholder="Цитат от глава 6" value={formData.quote6}
                            onChange={handleChange} required />
                        <input type="text" name="quote7" placeholder="Цитат от глава 7" value={formData.quote7}
                            onChange={handleChange} required />
                        <input type="text" name="quote8" placeholder="Цитат от глава 8" value={formData.quote8}
                            onChange={handleChange} required />

                        <button type="submit">Редактирай</button>
                    </form>
                </div>
            </section>

        </>
    );
}