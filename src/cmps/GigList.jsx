import { userService } from '../services/user'
import { GigPreview } from './GigPreview'

export function GigList({ gigs, onRemoveGig, onUpdateGig }) {

    function shouldShowActionBtns(gig) {
        const user = userService.getLoggedinUser()

        if (!user) return false
        if (user.isAdmin) return true
        return gig.owner?._id === user._id
    }

    return <section>
        <ul className="list">
            {gigs.map(gig =>
                <li key={gig._id}>
                    <GigPreview gig={gig} />
                </li>)
            }
        </ul>
    </section>
}