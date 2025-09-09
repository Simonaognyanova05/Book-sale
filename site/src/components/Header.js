import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
    const { user } = useAuth();

    const unlogged = (
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav mu-menu navbar-right">
                <li><a href="#">НАЧАЛО</a></li>
                <li><a href="#mu-book-overview">ОБЩ ПРЕГЛЕД</a></li>
                <li><a href="#mu-author">АВТОР</a></li>
                <li><a href="#mu-pricing">ЦЕНИ</a></li>
                <li><a href="#mu-testimonials">ОТЗИВИ</a></li>
                <li><a href="#mu-contact">КОНТАКТИ</a></li>
                <li><Link to="/sendComment">ОСТАВИ ОТЗИВ</Link></li>

            </ul>
        </div>
    );

    const logged = (
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav mu-menu navbar-right">
                <li><Link to="/editHome">НАЧАЛО</Link></li>
                <li><Link to="/editOverview">ОБЩ ПРЕГЛЕД</Link></li>
                <li><Link to="/editVideo">ВИДЕО</Link></li>
                <li><Link to="/editAuthor">АВТОР</Link></li>
                <li><Link to="/editPrices">ЦЕНИ</Link></li>
                <li><Link to="/messages">СЪОБЩЕНИЯ</Link></li>
                <li><Link to="/order">ПОРЪЧКИ</Link></li>
                <li><Link to="/logout">ИЗХОД</Link></li>

            </ul>
        </div>
    );
    return (
        <>
            <header id="mu-header" className="" role="banner">
                <div className="container">
                    <nav className="navbar navbar-default mu-navbar">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>

                                <Link className="navbar-brand" to="/"><i className="fa fa-book" aria-hidden="true"></i> Kindle</Link>



                            </div>

                            {Boolean(user.email) ? logged : unlogged}
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}