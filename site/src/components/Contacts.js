import { useNavigate } from "react-router-dom";
import { sendMessage } from "../services/sendMessage";

export default function Contacts() {
    const navigate = useNavigate();

    const sendHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { name, email, message } = Object.fromEntries(formData);

        let res = await sendMessage(name, email, message);
        if (res.status === 200) {
            alert("Съобщението е изратено успешно!");
            navigate('/');
        } else {
            alert("Възникна грешка, моля опитайте по-късно!");
        }
    }
    return (
        <>
            <section id="mu-contact">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mu-contact-area">

                                <div class="mu-heading-area">
                                    <h2 class="mu-heading-title">ОСТАВЕТЕ НИ СЪОБЩЕНИЕ</h2>
                                    <span class="mu-header-dot"></span>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                                </div>

                                <div class="mu-contact-content">

                                    <div id="form-messages"></div>
                                    <form id="ajax-contact" onSubmit={sendHandler} class="mu-contact-form">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Име и фамилия" id="name" name="name" required />
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Имейл" id="email" name="email" required />
                                        </div>
                                        <div class="form-group">
                                            <textarea class="form-control" placeholder="Съобщение" id="message" name="message" required></textarea>
                                        </div>
                                        <button type="submit" class="mu-send-msg-btn"><span>ИЗПРАТИ</span></button>
                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}