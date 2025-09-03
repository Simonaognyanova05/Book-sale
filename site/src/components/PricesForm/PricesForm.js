import './PricesForm.css';

export default function PricesForm() {
    return (
        <>
            <section class="login-section">
                <div class="login-box">
                    <h2>Редактиране на страница "Цени"</h2>
                    <form>
                        <input type="text" name="description" placeholder="Описание" required />
                        <input type="text" name="orderType" placeholder="Тип поръчка" required />
                        <input type="text" name="priceLv" placeholder="Цена в лв." required />
                        <input type="text" name="priceEuro" placeholder="Цена в евро" required />
                        <input type="text" name="descriptionOffer" placeholder="Описание на офертата" required />
                        <button type="submit">Редактирай</button>
                    </form>
                </div>
            </section>

        </>
    );
}