import { HomeIcon } from "../svg";
import { useNavigate } from 'react-router'


export function IndexHeader({ category }) {
    // const navigate = useNavigate()
    var description
    switch (category) {
        case 'Graphics & Design':
            description = 'Stand out from the crowd with a logo that fits your brand personality.'
            break

        case 'Programming & Tech':
            description = 'Create, build, and develop your website with skilled website developers'
            break
        case 'Digital Marketing':
            description = 'Rank high in search engines and get more visitors with SEO.'
            break
        case 'Video & Animation':
            description = 'Create or improve your videos with video editing and post-production services.'
            break
        case 'Writing & Translation':
            description = 'Keep your readers engaged with fresh content.'
            break
        case 'Music & Audio':
            description = 'Need to turn your demo into a hit? You have come to the right place.'
            break
        case 'Business':
            description = 'Start your business with expert formation and registration support.'
            break
        case 'Finance':
            description = 'Accurate accounting services to keep your finances in check.'
            break
        case 'AI Service':
            description = 'Build and integrate AI Engines into your application.'
            break
        case 'Personal Growth':
            description = 'Take the next step to perfecting a skill or task using online lessons'
            break
        case 'Consulting':
            description = 'Protect what you have worked for with legal research & online consulting'
            break
        case 'Data':
            description = 'Unlock business challenges with the power of data science.'
            break
        case 'Photography':
            description = 'Refine your brand’s look and improve credibility with our professional product photographers'
            break
        case 'All gigs':
            description = 'Gigs you may like'
            break

        default:
            description = 'Gigs you may like'
    }
function isDefault(category) {
    if(category==='default'){
        return 'All gigs'
    }
    else return category
    
}
    return (
        <section className="index-header">
            <div className="flex sub-header">
                <a className="home-icon flex" href="/gig"><HomeIcon /></a>
                <span>/</span>
                <a href="#">{isDefault(category)}</a>
            </div>
            <h2>{isDefault(category)}</h2>
            <p>{description}</p>
        </section>
    )
}