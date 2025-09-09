import { useState, useEffect } from "react";
import { getPricesInfo } from "../services/getPricesInfo";
import { Link } from "react-router-dom";

export default function Prices() {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        getPricesInfo()
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
            <section id="mu-pricing">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mu-pricing-area text-center">

                                <div className="mu-heading-area">
                                    <h2 className="mu-heading-title">НАШИТЕ ЦЕНИ</h2>
                                    <span className="mu-header-dot"></span>
                                    <p>
                                        {info.description}
                                    </p>
                                </div>

                                {/* Центрирана кутия */}
                                <div className="mu-pricing-content d-flex justify-content-center">
                                    <div className="mu-pricing-single mu-popular-price-tag">

                                        <div className="mu-pricing-single-head">
                                            <h4>{info.orderType}</h4>
                                            <p className="mu-price-tag">
                                               {info.priceLv} лв.

                                            </p>
                                            <p className="mu-price-tag">
                                               {info.priceEuro}€

                                            </p>
                                        </div>

                                        <ul className="mu-price-feature">
                                            <li>{info.descriptionOffer}</li>
                                        </ul>

                                        <div className="mu-pricing-single-footer">
                                            <Link to="/createOrder" className="mu-order-btn">НАПРАВИ ПОРЪЧКА</Link>
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
