import { Link } from 'react-router-dom'
import { FullSparkIcon, SparkIcon, StarIcon } from '../svg'

export function GigPreview({ gig }) {

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
            <img src={gig.imgUrl} />
            <div className="owner-details flex">
                <div className="owner-profile flex">
                    <img src={gig.owner.imgUrl} />
                    {/* <span>{gig.owner.fullname}</span> */}
                    <a href="#">{gig.owner.fullname}</a>
                </div>
                <div className="user-level flex">
                    {
                        gig.owner.level < 3 &&
                        <span>Lavel:{gig.owner.level}</span>
                    }
                    <span> {isLavel(gig.owner.level)}</span>
                </div>
            </div>
            <a href="#">{gig.title}</a>
            <div className="rate">
                <StarIcon/>
                <span>{gig.owner.rate}.0</span>
                <span className="reviews">({gig.reviews?.length || 0})</span>
            </div>

            <div className="count">
                From ₪{gig.price}
            </div>
        </article>
    )
}