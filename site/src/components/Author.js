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
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mu-author-area">

                                <div class="mu-heading-area">
                                    <h2 class="mu-heading-title">About The Author</h2>
                                    <span class="mu-header-dot"></span>
                                </div>

                                <div class="mu-author-content">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="mu-author-image">
                                                <img src={info.img} alt="Author Image" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mu-author-info">
                                                <h3>{info.names}</h3>
                                                <p>{info.description}</p>

                                                <img class="mu-author-sign" src="assets/images/author-signature.png" alt="Author Signature" />

                                                <div class="mu-author-social">
                                                    <a href={info.facebook}><i class="fa fa-facebook"></i></a>
                                                    <a href={info.instagram}><i class="fa fa-instagram"></i></a>
                                                    <a href={info.linkedIn}><i class="fa fa-linkedin"></i></a>
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