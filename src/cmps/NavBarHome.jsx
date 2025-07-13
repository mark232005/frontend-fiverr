
export function NavBarHome({onCategoryClick}) {
    return (
        <section className="nav-bar-header">
            <button onClick={()=>onCategoryClick('Programming & Tech')}>
                <div className="img flex">
                    <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/programming-tech-thin.56382a2.svg" alt="" />
                </div>
                <p>Programming & Tech</p>
            </button>
            <button onClick={()=>onCategoryClick('Graphics & Design')}>
                <div className="img flex">
                    <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/graphics-design-thin.ff38893.svg" alt="" />
                </div>
                <p> Graphics & Design</p>
            </button>
            <button onClick={()=>onCategoryClick('Digital Marketing')}>
                <div className="img flex">
                    <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/digital-marketing-thin.68edb44.svg" alt="" />
                </div>
                <p>Digital Marketing</p>
            </button>
            <button onClick={()=>onCategoryClick('Writing & Translation')}>
                <div className="img flex">
                    <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/writing-translation-thin.fd3699b.svg" alt="" />
                </div>
                <p>Writing & Translation</p>
            </button>
            <button onClick={()=>onCategoryClick('Video & Animation')}>
                <div className="img flex">
                    <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/video-animation-thin.9d3f24d.svg" alt="" />
                </div>
                <p>Video & Animation</p>
            </button>
            <button onClick={()=>onCategoryClick('AI Service')}>
                <div className="img flex">
                    <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/ai-services-thin.104f389.svg" alt="" />
                </div>
                <p>AI Services</p>
            </button>
            <button onClick={()=>onCategoryClick('Music & Audio')}>
                <div className="img flex">
                <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/music-audio-thin.43a9801.svg" alt="" />
                </div>
                <p>Music & Audio</p>
            </button>
            <button onClick={()=>onCategoryClick('Business')}>
                <div className="img flex">
                <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/business-thin.885e68e.svg" alt="" />
                </div>
                <p>Business</p>
            </button>
            <button onClick={()=>onCategoryClick('Consulting')}>
                <div className="img flex">
                <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/consulting-thin.d5547ff.svg" alt="" />
                </div>
                <p>Consulting</p>
            </button>

        </section>
    )
}