import { useNavigate } from 'react-router-dom';
import './WriteComment.css';
import { sendComment } from '../../services/sendComment';

export default function WriteComment() {
    const navigate = useNavigate();

    const sendHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { name, comment } = Object.fromEntries(formData);

        let res = await sendComment(name, comment);
        if (res.status === 200) {
            alert("Съобщението е изратено успешно!");
            navigate('/');
        } else {
            alert("Възникна грешка, моля опитайте по-късно!");
        }
    }
    return (
        <>
            <section class="login-section">
                <div class="login-box">
                    <h2>Редактиране на обща страница</h2>
                    <form onSubmit={sendHandler}>
                        <input type="text" name="name" placeholder="Име и фамилия" required />
                        <input type="text" name="comment" placeholder="Коментар" required />


                        <button type="submit">Редактирай</button>
                    </form>
                </div>
            </section>

        </>
    );
}