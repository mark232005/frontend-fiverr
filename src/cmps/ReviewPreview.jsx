import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import { EmptyStar, StarIcon } from '../svg';

export function ReviewPreview({ review, gig }) {
    // const { byUser, aboutUser } = review
    function stringAvatar(name = '') {
        const parts = name.trim().split(' ')
        const first = parts[0]?.[0] || ''
        const second = parts[1]?.[0] || ''
        return {
            children: `${first}${second}`.toUpperCase()
        }
    }
    function renderStars(level) {
        const stars = []

        for (let i = 0; i < +level; i++) {
            stars.push(<StarIcon key={`full-${i}`} />)
        }

        for (let i = +level; i < 5; i++) {
            stars.push(<EmptyStar key={`empty-${i}`} />)
        }
        return <div className="stars">{stars}</div>
    }

    return <div className="review-preview">
        <div className="user-data flex">
            <Avatar src="/static/images/avatar/1.jpg"
                sx={{ width: 48, height: 48, cursor: 'pointer', fontSize: '0.8rem' }}>
                {stringAvatar(review.name).children}
            </Avatar>
            <div className="details-user flex">
                <p>{review.name}</p>
                <div className="country flex">
                    <img src={review.flag} alt="" />
                    <p>{review.country}</p>

                </div>
            </div>

        </div>
        <div className="line"></div>
        <main>
            <div className="body-review">
                <div className="review-rate flex">
                    <p className="flex">{renderStars(review.rate)} <strong>{review.rate}</strong></p> <span></span> <time>{review.reviewedAt}</time>
                </div>
                <p>{review.review}</p>
                <div className="gig-summary flex">
                    <div className="price">
                        <p>Up to ${gig.price}</p>
                        <span>Price</span>
                    </div>
                    <div className="line"></div>
                    <div className="days">
                        <p>{gig.daysToMake} Days</p>
                        <span>Duration</span>
                    </div>

                </div>

            </div>
            <img src={gig.imgUrl[0]} />
        </main>
    </div>
}