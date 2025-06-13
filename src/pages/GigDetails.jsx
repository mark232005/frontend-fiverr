import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GigLayout } from '../cmps/GigLayout'
import { EmptyStar, FullSparkIcon, SparkIcon, StarIcon } from "../svg";



import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
// import { loadGig, addGigMsg } from '../store/gig.actions'
import { loadGig, addGigMsg } from '../store/gig.actions'
import { IndexHeader } from '../cmps/IndexHeader'
import { PackageCard } from '../cmps/PackageCard'
import { GetToKnow } from '../cmps/GetToKnow'

export function GigDetails() {
    const { gigId } = useParams()
    const gig = useSelector(storeState => storeState.gigModule.gig)

    useEffect(() => {
        console.log(gigId)
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

    function isLavel(lavel) {
        switch (lavel) {
            case '1':
                return (<>
                    <FullSparkIcon /> <SparkIcon /> <SparkIcon />
                </>)
            case '2':
                return (<>
                    <FullSparkIcon /> <FullSparkIcon /> <SparkIcon />
                </>)
            case '3':
                return (<>
                    <FullSparkIcon /> <FullSparkIcon /> <FullSparkIcon />
                </>)
            case '4':
                return (<div className='top-rated'>
                    Top Rated <FullSparkIcon /> <FullSparkIcon /> <FullSparkIcon />
                </div>
                )
            case '5':
                return (<div className='alufix-choice'>
                    Alufix's<span>Choice</span>
                </div>
                )
            default:
                return (<>
                    <SparkIcon /> <SparkIcon /> <SparkIcon />
                </>)
        }
    }


    if (!gig) return <div>Loading gig...</div>

    return (
        <section className="main-details-page">
            <IndexHeader category={gig.tags} />
            <section className=" details-page">
                <section className="gig-details">
                    <h1 className='gig-title'>{gig.title}</h1>
                    <div className='owner-details-container'>
                        <div className='profile-container flex'>
                            <img src={gig?.owner?.imgUrl} className='details-owner-profile-img' />
                            <div className='owner-details flex'>
                                <h3 className="user-title flex">
                                    {gig?.owner?.fullname || 'Loading...'}
                                    <div className="user-level flex">
                                        {
                                            gig.owner.level < 3 &&
                                            <span>Lavel:{gig.owner.level}</span>
                                        }
                                        <span> {isLavel(gig.owner.level)}</span>
                                    </div>

                                </h3>
                                <div className="flex owner-rate">
                                    {renderStars(gig.owner.rate)}
                                    <strong>{gig.owner.rate}.0</strong>
                                    <p>
                                    {`(${gig.reviews?.length || 0} reviews)`}
                                    </p>
                                </div>

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
                <PackageCard gig={gig} />
                <GetToKnow gig={gig} level={isLavel(gig.owner.level)} />
            </section>
        </section>
    )
}
