import { useState, useEffect } from "react";
import { getComments } from "../../services/getComments";
import TestimonialsItem from "./TestimonialsItem";

export default function Testimonials() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = await getComments();
        setComments(res);
    };
    return (
        <>
            <section id="mu-testimonials">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mu-testimonials-area">
                                <div className="mu-heading-area">
                                    <h2 className="mu-heading-title">МНЕНИЯТА НА НАШИТЕ ЧИТАТЕЛИ</h2>
                                    <span className="mu-header-dot"></span>
                                </div>

                                <div className="mu-testimonials-block">
                                    <ul className="mu-testimonial-slide">
                                        {comments.map(x => <TestimonialsItem comment={x} />)}

                                    </ul>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}