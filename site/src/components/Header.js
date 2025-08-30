export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-lg fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#section_1">
                    <i className="navbar-brand-icon bi-book me-2"></i>
                    <span>ebook</span>
                </a>

                <div className="d-lg-none ms-auto me-3">
                    <a href="#" className="btn custom-btn custom-border-btn btn-naira btn-inverted">
                        <i className="btn-icon bi-cloud-download"></i>
                        <span>Download</span>
                    </a>
                </div>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-lg-auto me-lg-4">
                        <li className="nav-item">
                            <a className="nav-link active" href="#section_1">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section_2">The Book</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section_3">Author</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section_4">Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section_5">Contact</a>
                        </li>
                    </ul>

                    <div className="d-none d-lg-block">
                        <a href="#" className="btn custom-btn custom-border-btn btn-naira btn-inverted">
                            <i className="btn-icon bi-cloud-download"></i>
                            <span>Download</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
