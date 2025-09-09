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
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mu-video-review-area">

                                <div class="mu-heading-area">
                                    <h2 class="mu-heading-title">ВИЖТЕ НАШЕТО ВИДЕО РЕВЮ</h2>
                                    <span class="mu-header-dot"></span>
                                    <p>{info.description}</p>
                                </div>

                                <div class="mu-video-review-content">
                                    <iframe class="mu-video-iframe" width="100%" height="480" src={info.video} frameborder="0" allowfullscreen></iframe>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}