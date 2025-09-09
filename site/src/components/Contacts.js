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
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mu-contact-area">

                                <div className="mu-heading-area">
                                    <h2 className="mu-heading-title">ОСТАВЕТЕ НИ СЪОБЩЕНИЕ</h2>
                                    <span className="mu-header-dot"></span>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                                </div>

                                <div className="mu-contact-content">

                                    <div id="form-messages"></div>
                                    <form id="ajax-contact" onSubmit={sendHandler} className="mu-contact-form">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Име и фамилия" id="name" name="name" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Имейл" id="email" name="email" required />
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" placeholder="Съобщение" id="message" name="message" required></textarea>
                                        </div>
                                        <button type="submit" className="mu-send-msg-btn"><span>ИЗПРАТИ</span></button>
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