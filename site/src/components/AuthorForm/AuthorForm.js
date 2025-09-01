import './AuthorForm.css';

export default function AuthorForm() {
    return (
        <>
            <section class="login-section">
                <div class="login-box">
                    <h2>Редактиране на страница "За автора"</h2>
                    <form>
                        <input type="text" placeholder="Имена" required />
                        <input type="text" placeholder="Описание" required />
                        <input type="text" placeholder="Подпис (линк към снимка)" required />
                        <input type="text" placeholder="Линк към facebook" required />
                        <input type="text" placeholder="Линк към LinkedIn" required />
                        <input type="text" placeholder="Линк към Instagram" required />
                        <button type="submit">Редактирай</button>
                    </form>
                </div>
            </section>

        </>
    );
}