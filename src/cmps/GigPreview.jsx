import { Link } from 'react-router-dom'

export function GigPreview({ gig }) {
    return (
        <article className="preview">
            <header>
                <Link to={`/gig/${gig._id}`}>{gig.vendor}</Link>
            </header>
            <div className="img-container">
                <Link to={`/gig/${gig._id}`}>
                    <img
                        src={gig.imgUrl || `https://robohash.org/${gig._id}?set=set1`}
                    />
                </Link>
            </div>
            {gig.owner && <p>Owner: <Link to={`/user/${gig.owner._id}`}>{gig.owner.fullname}</Link></p>}


        </article>
    )
}