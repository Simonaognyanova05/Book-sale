import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
    const { user } = useAuth();

    const unlogged = (
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav mu-menu navbar-right">
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
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav mu-menu navbar-right">
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

                            {Boolean(user.email) ? logged : unlogged}
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}