import { Link } from 'react-router-dom'
import { ArrowLiftIcon, ArrowRightIcon, FullSparkIcon, SparkIcon, StarIcon } from '../svg'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

export function GigPreview({ gig }) {
    const navigate = useNavigate()
    const [underlineTitle, setUnderlineTitle] = useState(false);
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
    return (
        <article className="preview">

            {Array.isArray(gig.imgUrl) && gig.imgUrl.length > 0 ? (
                <Carousel
                    showIndicators={false}
                    showThumbs={false}
                    showArrows={true}
                    showStatus={false}
                    onClickItem={() => navigate(`/gig/${gig._id}`)}
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                        hasPrev && (
                            <button className="carousel-arrow left" onClick={onClickHandler} title={label}>
                                <span className="arrow-icon"><ArrowLiftIcon height={12} width={12} /></span>
                            </button>
                        )
                    }
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                        hasNext && (
                            <button className="carousel-arrow right" onClick={onClickHandler} title={label}>
                                <span className="arrow-icon"><ArrowRightIcon height={12} width={12} /></span>
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
            ) : gig.imgUrl ? (
                <img
                    src={gig.imgUrl}
                    onClick={() => navigate(`/gig/${gig._id}`)}
                    alt="Gig main image"
                />
            ) : (
                <div className="no-img">No image available</div>
            )}



            <div className="owner-details flex">
                <div className="owner-profile flex">
                    <img src={gig.owner.imgUrl} />
                    {/* <span>{gig.owner.fullname}</span> */}
                    <a href={`user/${gig.owner}`}>{gig.owner.fullname}</a>
                </div>
                <div className="user-level flex">
                    {
                        gig.owner.level < 3 &&
                        <span>Lavel:{gig.owner.level}</span>
                    }
                    <span> {isLavel(gig.owner.level)}</span>
                </div>
            </div>
            <a className={underlineTitle ? 'underline' : ''} href={`gig/${gig._id}`}>{gig.title}</a>
            <div className="rate">
                <StarIcon />
                <span>{gig.owner.rate}.0</span>
                <span className="reviews">({gig.reviews?.length || 0})</span>
            </div>

            <a href={`gig/${gig._id}`} onMouseEnter={() => setUnderlineTitle(true)}
                onMouseLeave={() => setUnderlineTitle(false)}
                className="count">
                From ₪{gig.price}
            </a>
        </article>
    )
}


