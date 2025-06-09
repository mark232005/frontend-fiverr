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
        console.log(gigId);
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

    if (!gig) return <div>Loading gig...</div>  // <--- Add this line

    return (
        <GigLayout category="default ">
            <section className=" details-page flex">
                <section className="gig-details">
                    <h1 className='gig-title'>{gig.title}</h1>
                    <div className='owner-details-container'>
                        <div className='profile-container flex'>
                            <img src={gig?.owner?.imgUrl} className='details-owner-profile-img' />
                            <div className='owner-details flex'>
                                <h3 className='user-title'>
                                    {gig?.owner?.fullname || 'Loading...'}
                                   {<span> Lavel {gig.owner.level}</span>}
                                </h3>
                                <span>{[...Array(gig.owner.rate || 0)].map((_, idx) => (
                                    <StarIcon key={idx} />
                                ))} {gig.owner.rate}</span>
                            </div>
                        </div>
                    </div>
                    <div className='carousle-conteiner'>
                        <img src={gig?.imgUrl || `https://robohash.org/${gig._id}?set=set1`} />
                    </div>
                    <div className='about-gig'>
                        <h1 className='about-gig-title'>About This Gig</h1>
                        <p className='gig-description'>{gig?.about}</p>
                    </div>
                </section>

                <section className='package-card'>
                    <div className='tabs'>
                        <div className='tab active'>Basic</div>
                    </div>

                    <div className='card-body'>
                        <h2 className="card-price">
                            {new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                            }).format(gig?.price || 0)}
                        </h2>
                        <h3>Beginner Package</h3>
                        <p>1 logo design, High Quality Mock-up, Logo Transparency</p>
                        <div class="feature">
                            ✔️ 1 concept included
                        </div>
                        <div class="feature">
                            ✔️ Logo transparency
                        </div>

                    </div>
                    <button class="continue-btn">Continue ➜</button>
                    <div class="compare-link">Compare packages</div>


                </section>
            </section>
            {/* <Link to="/gig">Back to list</Link> */}
        </GigLayout>
    )
}
