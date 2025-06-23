import { EmptyStar, StarIcon } from "../svg";


export function GetToKnow({ gig,level }) {
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
    return (
        <section className="get-to-know">
            <h2>Get to know <span>{gig.owner.fullname}</span></h2>
            <div className="user-profile">
                <img src={gig.owner.imgUrl} alt="" />
                <div className="user-details">
                    <span className="name">{gig.owner.fullname}</span>
                    <span>{gig.tags}</span>
                    <div className="flex rating-info ">
                        <div className="rating flex">
                            {renderStars(gig.owner.rate)}
                            <span>{gig.owner.rate}.0</span>
                            <span>{`(${gig.reviews?.length || 0})`}</span>
                        </div>
                        /
                        <div className="user-level flex">
                            {
                                gig.owner.level < 3 &&
                                <span>Lavel:{gig.owner.level}</span>
                            }
                            <span> {level}</span>
                        </div>

                    </div>
                </div>
            </div>
            <button>Contact me</button>
            <div className="seller-profile">
                <div className="vetted-info">
                    <p>{gig.owner.fullname} is part of the Fiverr Pro catalog and has been hand-picked by a dedicated Fiverr Pro team for their skills and expertise.
                    </p>
                    <h1>Vetted for</h1>
                    <span>{gig.tags}</span>

                </div>
                <div className="seller-details">
                    <ul>
                        <li>
                            <h2>From</h2>
                            <strong>{gig.country}</strong>
                        </li>
                        <li>
                            <h2>Avg. response time</h2>
                            <strong>1 hour</strong>
                        </li>
                        <li>
                            <h2>Languages</h2>
                            <strong>English, French</strong>
                        </li>
                        <li>
                            <h2>Member since</h2>
                            <strong>Apr 2020</strong>
                        </li>
                        <li>
                            <h2>Last delivery</h2>
                            <strong>about 25 minutes</strong>
                        </li>
                    </ul>

                    <div className="description">
                        <p>{gig.about}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}