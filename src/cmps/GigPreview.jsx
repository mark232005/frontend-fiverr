import { Link } from 'react-router-dom'

export function GigPreview({ gig }) {
    return (
        <article className="preview">
            <header>
                <Link to={`/gig/${gig._id}`}>{gig.vendor}</Link>
            </header>

            {gig.owner && <p>Owner: <Link to={`/user/${gig.owner._id}`}>{gig.owner.fullname}</Link></p>}

        </article>
    )
}