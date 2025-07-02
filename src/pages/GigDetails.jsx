import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ArrowLiftIcon, ArrowRightIcon, EmptyStar, FullSparkIcon, SparkIcon, StarIcon } from "../svg";
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"





import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
// import { loadGig, addGigMsg } from '../store/gig.actions'
import { loadGig, addGigMsg } from '../store/gig.actions'
import { IndexHeader } from '../cmps/IndexHeader'
import { PackageCard } from '../cmps/PackageCard'
import { GetToKnow } from '../cmps/GetToKnow'
import { Loader } from '../cmps/Loader'
import { ReviewList } from '../cmps/ReviewList'

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


    if (!gig) return <Loader />

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
                        <Carousel
                            showIndicators={false}
                            showThumbs={true}
                            showArrows={true}
                            showStatus={false}
                            infiniteLoop={true}
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <button className="carousel-arrow left" onClick={onClickHandler} title={label}>
                                        <span className="arrow-icon"><ArrowLiftIcon height={16} width={16} /></span>
                                    </button>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <button className="carousel-arrow right" onClick={onClickHandler} title={label}>
                                        <span className="arrow-icon"><ArrowRightIcon height={16} width={16} /></span>
                                    </button>
                                )
                            }
                        >
                            {gig.imgUrl.map((imgUrl, idx) => (
                                <div key={idx}>
                                    <img src={imgUrl} alt={`Gig image ${idx + 1}`} />
                                </div>
                            ))}
                        </Carousel>
                    </div>

                    <div className='about-gig'>
                        <h1 className='about-gig-title'>About This Gig</h1>
                        <div
                            className="gig-description"
                            dangerouslySetInnerHTML={{ __html: gig?.description }}
                        ></div>
                    </div>
                </section>
                <PackageCard gig={gig} />
                <GetToKnow gig={gig} level={isLavel(gig.owner.level)} />
                <ReviewList reviews={gig.reviews} gig={gig} />
            </section>
        </section>
    )
}