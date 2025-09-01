import './HomeForm.css';

export default function HomeForm() {
    return (
        <>
            <section class="login-section">
                <div class="login-box">
                    <h2>Редактиране на начална страница</h2>
                    <form>
                        <input type="text" placeholder="Заглавие" required />
                        <input type="text" placeholder="Описание" required />
                        <button type="submit">Редактирай</button>
                    </form>
                </div>
            </section>

        </>
    );
}