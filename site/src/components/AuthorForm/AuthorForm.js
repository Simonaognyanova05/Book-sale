import './AuthorForm.css';

export default function AuthorForm() {
    return (
        <>
            <section class="login-section">
                <div class="login-box">
                    <h2>Редактиране на страница "За автора"</h2>
                    <form>
                        <input type="text" name="names" placeholder="Имена" required />
                        <input type="text" name="description" placeholder="Описание" required />
                        <input type="text" name="signature" placeholder="Подпис (линк към снимка)" required />
                        <input type="text" name="facebook" placeholder="Линк към facebook" required />
                        <input type="text" name="linkedIn" placeholder="Линк към LinkedIn" required />
                        <input type="text" name="instagram" placeholder="Линк към Instagram" required />
                        <button type="submit">Редактирай</button>
                    </form>
                </div>
            </section>

        </>
    );
}