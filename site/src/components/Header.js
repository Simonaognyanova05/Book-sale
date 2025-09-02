import { Link } from 'react-router-dom';

export default function Header() {

    const unlogged = (
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav mu-menu navbar-right">
                <li><a href="#">HOME</a></li>
                <li><a href="#mu-book-overview">OVERVIEW</a></li>
                <li><a href="#mu-author">AUTHOR</a></li>
                <li><a href="#mu-pricing">PRICE</a></li>
                <li><a href="#mu-testimonials">TESTIMONIALS</a></li>
                <li><a href="#mu-contact">CONTACT</a></li>
            </ul>
        </div>
    );

    const logged = (
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav mu-menu navbar-right">
                <li><Link to="/editHome">HOME</Link></li>
                <li><Link to="/editOverview">OVERVIEW</Link></li>
                <li><Link to="/editAuthor">AUTHOR</Link></li>
                <li><Link to="/editPrices">PRICE</Link></li>
                <li><Link to="#mu-contact">CONTACT</Link></li>
            </ul>
        </div>
    );
    return (
        <>
            <header id="mu-header" class="" role="banner">
                <div class="container">
                    <nav class="navbar navbar-default mu-navbar">
                        <div class="container-fluid">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>

                                <Link class="navbar-brand" to="/"><i class="fa fa-book" aria-hidden="true"></i> Kindle</Link>



                            </div>

                            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul class="nav navbar-nav mu-menu navbar-right">
                                    <li><a href="#">HOME</a></li>
                                    <li><a href="#mu-book-overview">OVERVIEW</a></li>
                                    <li><a href="#mu-author">AUTHOR</a></li>
                                    <li><a href="#mu-pricing">PRICE</a></li>
                                    <li><a href="#mu-testimonials">TESTIMONIALS</a></li>
                                    <li><a href="#mu-contact">CONTACT</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}