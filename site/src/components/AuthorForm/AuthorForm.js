import { updateAuthor } from '../../services/updates/updateAuthor';
import './AuthorForm.css';
import { useState } from 'react';


export default function AuthorForm() {
    const [formData, setFormData] = useState({
        names: "",
        description: "",
        signature: "",
        facebook: "",
        instagram: "",
        linkedIn: "",
        img: "",
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
        await updateAuthor(formData); // извиква сървиза
    };
    return (
        <>
            <section className="login-section">
                <div className="login-box">
                    <h2>Редактиране на страница "За автора"</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="names" placeholder="Имена" value={formData.names}
                            onChange={handleChange} required />
                        <input type="text" name="description" placeholder="Описание" value={formData.description}
                            onChange={handleChange} required />
                        <input type="text" name="signature" placeholder="Подпис (линк към снимка)" value={formData.signature}
                            onChange={handleChange} required />
                        <input type="text" name="facebook" placeholder="Линк към facebook" value={formData.facebook}
                            onChange={handleChange} required />
                        <input type="text" name="linkedIn" placeholder="Линк към LinkedIn" value={formData.linkedIn}
                            onChange={handleChange} required />
                        <input type="text" name="instagram" placeholder="Линк към Instagram" value={formData.instagram}
                            onChange={handleChange} required />
                        <input type="text" name="img" placeholder="Линк към изображение" value={formData.img}
                            onChange={handleChange} required />

                        <button type="submit">Редактирай</button>
                    </form>
                </div>
            </section>

        </>
    );
}