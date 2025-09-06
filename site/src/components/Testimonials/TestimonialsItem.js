export default function TestimonialsItem({comment}) {
    return (
        <li>
            <p>{comment.comment}</p>

            <h5 class="mu-rt-name"> - {comment.name}</h5>
        </li>

    );
}