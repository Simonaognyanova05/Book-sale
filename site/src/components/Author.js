import { useState, useEffect } from "react";
import { getAuthorInfo } from "../services/getAuthorInfo";

export default function Author() {
    const [info, setInfo] = useState(null);

    useEffect(() => {
            getAuthorInfo()
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
        <>
            <section id="mu-author">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mu-author-area">

                                <div className="mu-heading-area">
                                    <h2 className="mu-heading-title">ЗА АВТОРКАТА</h2>
                                    <span className="mu-header-dot"></span>
                                </div>

                                <div className="mu-author-content">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mu-author-image">
                                                <img src={info.img} alt="Author Image" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mu-author-info">
                                                <h3>{info.names}</h3>
                                                <p>{info.description}</p>

                                                <img className="mu-author-sign" src="assets/images/author-signature.png" alt="Author Signature" />

                                                <div className="mu-author-social">
                                                    <a href={info.facebook}><i className="fa fa-facebook"></i></a>
                                                    <a href={info.instagram}><i className="fa fa-instagram"></i></a>
                                                    <a href={info.linkedIn}><i className="fa fa-linkedin"></i></a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}