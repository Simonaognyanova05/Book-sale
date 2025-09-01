export default function Prices() {
    return (
        <>
            <section id="mu-pricing">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mu-pricing-area text-center">

                                <div className="mu-heading-area">
                                    <h2 className="mu-heading-title">Our Pricing Plans</h2>
                                    <span className="mu-header-dot"></span>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever
                                    </p>
                                </div>

                                {/* Центрирана кутия */}
                                <div className="mu-pricing-content d-flex justify-content-center">
                                    <div className="mu-pricing-single mu-popular-price-tag">

                                        <div className="mu-pricing-single-head">
                                            <h4>PROFESSIONAL PLAN</h4>
                                            <p className="mu-price-tag">
                                                <span>$</span> 25
                                            </p>
                                        </div>

                                        <ul className="mu-price-feature">
                                            <li>Lorem ipsum dolor sit amet.</li>
                                        </ul>

                                        <div className="mu-pricing-single-footer">
                                            <a href="#" className="mu-order-btn">Order Now!</a>
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
