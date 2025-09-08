import { useEffect, useState } from "react";
import { getHomeInfo } from "../services/getHomeInfo";
import { Link } from "react-router-dom";

export default function Home() {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        getHomeInfo()
            .then(res => {
                setInfo(res);
            })
            .catch(e => {
                console.log(e);
            });
    }, []);

    if (!info) {
        return <p>Зареждане...</p>; 
    }

    return (
        <section id="mu-hero">
            <div className="container">
                <div className="row">

                    <div className="col-md-6 col-sm-6 col-sm-push-6">
                        <div className="mu-hero-right">
                            <img src="assets/images/ebook.png" alt="Ebook img" />
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-6 col-sm-pull-6">
                        <div className="mu-hero-left">
                            <h1>{info.title}</h1>
                            <p>{info.description}</p>
                            <Link to="/createOrder" className="mu-primary-btn">Download Now!</Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
