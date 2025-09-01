import './PricesForm.css';

export default function PricesForm() {
    return (
        <>
            <section class="login-section">
                <div class="login-box">
                    <h2>Редактиране на страница "Цени"</h2>
                    <form>
                        <input type="text" placeholder="Описание" required />
                        <input type="text" placeholder="Тип поръчка" required />
                        <input type="text" placeholder="Цена" required />
                        <input type="text" placeholder="Описание на офертата" required />
                        <button type="submit">Редактирай</button>
                    </form>
                </div>
            </section>

        </>
    );
}