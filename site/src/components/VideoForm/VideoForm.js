import './VideoForm.css';

export default function VideoForm() {
    return (
        <>
            <section class="login-section">
                <div class="login-box">
                    <h2>Редактиране на обща страница</h2>
                    <form>
                        <input type="text" name="description" placeholder="Описание" required />
                        <input type="text" name="video" placeholder="Видео (Линк)" required />

                        <button type="submit">Редактирай</button>
                    </form>
                </div>
            </section>

        </>
    );
}