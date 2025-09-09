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
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mu-testimonials-area">
                                <div class="mu-heading-area">
                                    <h2 class="mu-heading-title">МНЕНИЯТА НА НАШИТЕ ЧИТАТЕЛИ</h2>
                                    <span class="mu-header-dot"></span>
                                </div>

                                <div class="mu-testimonials-block">
                                    <ul class="mu-testimonial-slide">
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