export default function Home() {
    const handleScroll = (e, id) => {
        e.preventDefault();
        const target = document.querySelector(id);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <section className="hero-section d-flex justify-content-center align-items-center" id="home">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12 mb-5 pb-5 pb-lg-0 mb-lg-0">

                            <h6>Introducing ebook</h6>

                            <h1 className="text-white mb-4">
                                ebook landing page for professionals
                            </h1>

                            <a
                                href="#discover"
                                onClick={(e) => handleScroll(e, "#discover")}
                                className="btn custom-btn me-3"
                            >
                                Discover More
                            </a>

                            <a
                                href="#author"
                                onClick={(e) => handleScroll(e, "#author")}
                                className="link link--kale"
                            >
                                Meet the Author
                            </a>
                        </div>

                        <div className="hero-image-wrap col-lg-6 col-12 mt-3 mt-lg-0">
                            <img
                                src="images/education-online-books.png"
                                className="hero-image img-fluid"
                                alt="education online books"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* Dummy sections за навигация */}
            <section id="discover" style={{ height: "100vh", background: "#f5f5f5" }}>
                <div className="container">
                    <h2>Discover More</h2>
                    <p>Some content about the ebook goes here...</p>
                </div>
            </section>

            <section id="author" style={{ height: "100vh", background: "#ddd" }}>
                <div className="container">
                    <h2>Meet the Author</h2>
                    <p>Author biography and details...</p>
                </div>
            </section>
        </>
    );
}
