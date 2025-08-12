import Header from "./Header";

export default function Home() {
    return (
        <>
            <div class="hero_area">
                <header class="header_section">
                    <div class="container">
                        <nav class="navbar navbar-expand-lg custom_nav-container">
                            <a class="navbar-brand" href="index.html">
                                <img src="images/logo.png" alt="" />
                                <span>
                                    Energym
                                </span>
                            </a>
                            <div class="contact_nav" id="">
                                <ul class="navbar-nav ">
                                    <li class="nav-item">
                                        <a class="nav-link" href="service.html">
                                            <img src="images/location.png" alt="" />
                                            <span>Location</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="service.html">
                                            <img src="images/call.png" alt="" />
                                            <span>Call : + 01 1234567890</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="service.html">
                                            <img src="images/envelope.png" alt="" />
                                            <span>demo@gmail.com</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>

                </header>
                <section class=" slider_section position-relative">
                    <div class="container">
                        <div class="custom_nav2">
                            <Header />
                        </div>
                    </div>
                    <div class="slider_container">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-lg-6 col-md-7 offset-md-6 offset-md-5">
                                                <div class="detail-box">
                                                    <h2>
                                                        Get Your Body
                                                    </h2>
                                                    <h1>
                                                        Fitness Here
                                                    </h1>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                        labore et dolore magna aliqua. Ut enim ad minim veniam
                                                    </p>
                                                    <div class="btn-box">
                                                        <a href="" class="btn-1">
                                                            Read More
                                                        </a>
                                                        <a href="" class="btn-2">
                                                            Get A Quote
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item ">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-lg-6 col-md-7 offset-md-6 offset-md-5">
                                                <div class="detail-box">
                                                    <h2>
                                                        Get Your Body
                                                    </h2>
                                                    <h1>
                                                        Fitness Here
                                                    </h1>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                        labore et dolore magna aliqua. Ut enim ad minim veniam
                                                    </p>
                                                    <div class="btn-box">
                                                        <a href="" class="btn-1">
                                                            Read More
                                                        </a>
                                                        <a href="" class="btn-2">
                                                            Get A Quote
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item ">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-lg-6 col-md-7 offset-md-6 offset-md-5">
                                                <div class="detail-box">
                                                    <h2>
                                                        Get Your Body
                                                    </h2>
                                                    <h1>
                                                        Fitness Here
                                                    </h1>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                        labore et dolore magna aliqua. Ut enim ad minim veniam
                                                    </p>
                                                    <div class="btn-box">
                                                        <a href="" class="btn-1">
                                                            Read More
                                                        </a>
                                                        <a href="" class="btn-2">
                                                            Get A Quote
                                                        </a>
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
            </div>
        </>
    );
}