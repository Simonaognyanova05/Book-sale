import { useNavigate } from 'react-router-dom';
import { login } from '../../services/login';
import './Login.css';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const { onLogin } = useAuth();

    const loginHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { email, password } = Object.fromEntries(formData);

        let result = await login(email, password);

        if (result.status == 200) {
            alert("Влизането е успешно!");
            onLogin(result.user);
            navigate('/');
        } else {
            alert("Грешен имейл или парола!");
        }
    }
    return (
        <>
            <section class="login-section">
                <div class="login-box">
                    <h2>Login</h2>
                    <form onSubmit={loginHandler}>
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="password" name="password" placeholder="Password" required />
                        <button type="submit">Sign In</button>
                    </form>
                    <p><Link to="/forgotten">Забравена парола</Link></p>
                </div>
            </section>

        </>
    );
}