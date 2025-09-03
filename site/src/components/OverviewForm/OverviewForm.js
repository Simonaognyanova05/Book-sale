import './OverviewForm.css';

export default function OverviewForm() {
    return (
        <>
            <section class="login-section">
                <div class="login-box">
                    <h2>Редактиране на обща страница</h2>
                    <form>
                        <input type="text" name="description" placeholder="Описание" required />
                        <input type="text" name="quote" placeholder="Цитат от глава 1" required />

                        <button type="submit">Редактирай</button>
                    </form>
                </div>
            </section>

        </>
    );
}