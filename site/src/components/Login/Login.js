import './Login.css';

export default function Login() {
    return (
        <>
            <section class="login-section">
                <div class="login-box">
                    <h2>Login</h2>
                    <form>
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit">Sign In</button>
                    </form>
                    <p>Don't have an account? <a href="#">Sign up</a></p>
                </div>
            </section>

        </>
    );
}