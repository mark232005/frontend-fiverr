import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GigLayout } from '../cmps/GigLayout'
import { StarIcon } from "../svg";



import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
// import { loadGig, addGigMsg } from '../store/gig.actions'
import { loadGig, addGigMsg } from '../store/gig.actions'

export function GigDetails() {

    const { gigId } = useParams()
    const gig = useSelector(storeState => storeState.gigModule.gig)

    useEffect(() => {
        loadGig(gigId)
    }, [gigId])

    async function onAddGigMsg(gigId) {
        try {
            await addGigMsg(gigId, 'bla bla ' + parseInt(Math.random() * 10))
            showSuccessMsg(`gig msg added`)
        } catch (err) {
            showErrorMsg('Cannot add gig msg')
        }

    }

    return (
        <GigLayout category="default">
            <section className="gig-details">
                <h1 className='gig-title'>{gig?.title}</h1>
                <div className='owner-details-container'>
                    <div className='profile-container'>
                        <div className='owner-details'>
                            <div className='user-container'>
                                <h3 className='user-title'>
                                    {gig?.owner?.fullname || 'Loading...'}
                                </h3>
                            </div>
                            <div className='star-wrapper'>
                                <span><a className="home-icon" href="/gig"><StarIcon /></a>
                                    <span className='owner-rate'>{gig?.owner?.rate}</span></span>
                                <span class="divider">|</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='carousle-conteiner'>

                    <img
                        src={gig?.imgUrl || (gig ? `https://robohash.org/${gig._id}?set=set1` : '')}
                    />
                </div>
                <div className='about-gig'>
                    <h1 className='about-gig-title'>About This Gig</h1>
                    <p className='gig-description'>{gig?.about}</p>
                </div>
            </section>
            <Link to="/gig">Back to list</Link>
        </GigLayout>
    )
}