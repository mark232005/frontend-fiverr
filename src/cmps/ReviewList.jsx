import { DislikeIcon, LikeIcon } from '../svg.jsx'

import { ReviewPreview } from './ReviewPreview.jsx'

export function ReviewList({ reviews, gig }) {

    if (!reviews) return
    return <section className="reviews-list">
        <h2>Reviews</h2>
        <ul className="review-list">
            {reviews.map(review =>
                <li key={review._id}>
                    <ReviewPreview review={review} gig={gig} />
                    <div className="flex footer">
                        <span>Helpful?</span>
                        <div className="icons flex">
                            <LikeIcon /> Yes   <DislikeIcon /> No
                           
                        </div>
                    </div>
                </li>)
            }
        </ul>
    </section>
}