import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgottenPassword.css';
import { forgottenPassword } from '../../services/forgottenPassword';

export default function ForgottenPassword() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await forgottenPassword(email);
            alert("Изпратихме ви имейл за възстановяване на паролата.");
            navigate("/admin/login");
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                alert("Не съществува потребител с този имейл.");
            } else if (error.code === 'auth/invalid-email') {
                alert("Невалиден имейл адрес.");
            } else {
                alert("Грешка: " + error.message);
            }
        }
    };
    return (
        <>
            <section className="login-section">
                <div className="login-box">
                    <h2>Забравена парола</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Въведете имейл"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Готово</button>
                    </form>
                </div>
            </section>

        </>
    );
}