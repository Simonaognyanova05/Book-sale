import Overview from "./Overview";
import Home from "./Home";
import Video from "./Video";
import Author from "./Author";
import Prices from "./Prices";
import Testimonials from "./Testimonials/Testimonials";
import Contacts from "./Contacts";

export default function Main() {
    return (
        <>
            <Home />
            <main role="main">

                <Overview />
                <Prices />
                <Video />
                <Author />
                <Testimonials />
                <Contacts />

            </main>
        </>
    );
}