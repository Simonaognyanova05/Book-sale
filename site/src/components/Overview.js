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
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="mu-book-overview-area">

                            <div class="mu-heading-area">
                                <h2 class="mu-heading-title">Book Overview</h2>
                                <span class="mu-header-dot"></span>
                                <p>{info.description}</p>
                            </div>

                            <div class="mu-book-overview-content">
                                <div class="row">

                                    <div class="col-md-3 col-sm-6">
                                        <div class="mu-book-overview-single">
                                            <span class="mu-book-overview-icon-box">
                                                <i class="fa fa-area-chart" aria-hidden="true"></i>
                                            </span>
                                            <h4>Chapter One</h4>
                                            <p>{info.quote1}</p>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6">
                                        <div class="mu-book-overview-single">
                                            <span class="mu-book-overview-icon-box">
                                                <i class="fa fa-cubes" aria-hidden="true"></i>
                                            </span>
                                            <h4>Chapter Two</h4>
                                            <p>{info.quote2}</p>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6">
                                        <div class="mu-book-overview-single">
                                            <span class="mu-book-overview-icon-box">
                                                <i class="fa fa-modx" aria-hidden="true"></i>
                                            </span>
                                            <h4>Chapter Three</h4>
                                            <p>{info.quote3}</p>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6">
                                        <div class="mu-book-overview-single">
                                            <span class="mu-book-overview-icon-box">
                                                <i class="fa fa-files-o" aria-hidden="true"></i>
                                            </span>
                                            <h4>Chapter Four</h4>
                                            <p>{info.quote4}</p>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6">
                                        <div class="mu-book-overview-single">
                                            <span class="mu-book-overview-icon-box">
                                                <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
                                            </span>
                                            <h4>Chapter Five</h4>
                                            <p>{info.quote5}</p>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6">
                                        <div class="mu-book-overview-single">
                                            <span class="mu-book-overview-icon-box">
                                                <i class="fa fa-language" aria-hidden="true"></i>
                                            </span>
                                            <h4>Chapter Six</h4>
                                            <p>{info.quote6}</p>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6">
                                        <div class="mu-book-overview-single">
                                            <span class="mu-book-overview-icon-box">
                                                <i class="fa fa-gg" aria-hidden="true"></i>
                                            </span>
                                            <h4>Chapter Seven</h4>
                                            <p>{info.quote7}</p>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6">
                                        <div class="mu-book-overview-single">
                                            <span class="mu-book-overview-icon-box">
                                                <i class="fa fa-wpforms" aria-hidden="true"></i>
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