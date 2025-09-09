import { useState, useEffect } from "react";
import { getVideo } from "../services/getVideo";

export default function Video() {
    const [info, setInfo] = useState(null);

    useEffect(() => {
            getVideo()
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
            <section id="mu-video-review">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mu-video-review-area">

                                <div className="mu-heading-area">
                                    <h2 className="mu-heading-title">ВИЖТЕ НАШЕТО ВИДЕО РЕВЮ</h2>
                                    <span className="mu-header-dot"></span>
                                    <p>{info.description}</p>
                                </div>

                                <div className="mu-video-review-content">
                                    <iframe className="mu-video-iframe" width="100%" height="480" src={info.video} frameborder="0" allowfullscreen></iframe>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}