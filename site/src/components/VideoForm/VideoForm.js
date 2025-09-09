import { updateVideo } from '../../services/updates/updateVideo';
import { useState } from 'react';
import './VideoForm.css';

export default function VideoForm() {
    const [formData, setFormData] = useState({
        description: "",
        video: "",
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
        await updateVideo(formData); // извиква сървиза
    };
    return (
        <>
            <section className="login-section">
                <div className="login-box">
                    <h2>Редактиране на страница за видео представяне</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="description" placeholder="Описание" value={formData.description}
                            onChange={handleChange} required />
                        <input type="text" name="video" placeholder="Видео (Линк)" value={formData.video}
                            onChange={handleChange} required />

                        <button type="submit">Редактирай</button>
                    </form>
                </div>
            </section>

        </>
    );
}