import { useState, useEffect } from "react";
import { getOverviewInfo } from "../services/getOverviewInfo";

export default function Overview() {
    const [info, setInfo] = useState(null);

    useEffect(() => {
            getOverviewInfo()
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
        <section id="mu-book-overview">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mu-book-overview-area">

                            <div className="mu-heading-area">
                                <h2 className="mu-heading-title">ОБЩ ПРЕГЛЕД НА КНИГАТА</h2>
                                <span className="mu-header-dot"></span>
                                <p>{info.description}</p>
                            </div>

                            <div className="mu-book-overview-content">
                                <div className="row">

                                    <div className="col-md-3 col-sm-6">
                                        <div className="mu-book-overview-single">
                                            <span className="mu-book-overview-icon-box">
                                                <i className="fa fa-area-chart" aria-hidden="true"></i>
                                            </span>
                                            <h4>Chapter One</h4>
                                            <p>{info.quote1}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="mu-book-overview-single">
                                            <span className="mu-book-overview-icon-box">
                                                <i className="fa fa-cubes" aria-hidden="true"></i>
                                            </span>
                                            <h4>Chapter Two</h4>
                                            <p>{info.quote2}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="mu-book-overview-single">
                                            <span className="mu-book-overview-icon-box">
                                                <i className="fa fa-modx" aria-hidden="true"></i>
                                            </span>
                                            <h4>Chapter Three</h4>
                                            <p>{info.quote3}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="mu-book-overview-single">
                                            <span className="mu-book-overview-icon-box">
                                                <i className="fa fa-files-o" aria-hidden="true"></i>
                                            </span>
                                            <h4>Chapter Four</h4>
                                            <p>{info.quote4}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="mu-book-overview-single">
                                            <span className="mu-book-overview-icon-box">
                                                <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                                            </span>
                                            <h4>Chapter Five</h4>
                                            <p>{info.quote5}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="mu-book-overview-single">
                                            <span className="mu-book-overview-icon-box">
                                                <i className="fa fa-language" aria-hidden="true"></i>
                                            </span>
                                            <h4>Chapter Six</h4>
                                            <p>{info.quote6}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="mu-book-overview-single">
                                            <span className="mu-book-overview-icon-box">
                                                <i className="fa fa-gg" aria-hidden="true"></i>
                                            </span>
                                            <h4>Chapter Seven</h4>
                                            <p>{info.quote7}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="mu-book-overview-single">
                                            <span className="mu-book-overview-icon-box">
                                                <i className="fa fa-wpforms" aria-hidden="true"></i>
                                            </span>
                                            <h4>Chapter Eight</h4>
                                            <p>{info.quote8}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}