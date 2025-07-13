import { ArrowLiftIcon, ArrowRightIcon } from "../svg";

export function PopularServices({scrollLeft,scrollRight,scrollRef,showLeft,showRight,onCategoryClick}){
    return(
        <section className="popular-services">
                            <h2>Popular services</h2>
                <div className="btn" ref={scrollRef}>
                    <button onClick={()=>onCategoryClick('Programming & Tech')}>
                        <h3>Website Development</h3>
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156477/website-development.png" alt="" />
                    </button>
                    <button onClick={()=>onCategoryClick('Video & Animation')}>
                        <h3>Video Editing</h3>
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/video-editing.png" alt="" />
                    </button>
                    <button onClick={()=>onCategoryClick('Programming & Tech')}>
                        <h3>Software Development</h3>
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/software-development.png" alt="" />
                    </button>
                    <button onClick={()=>onCategoryClick('Digital Marketing')}>
                        <h3>SEO</h3>
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156488/seo.png" alt="" />
                    </button>
                    <button onClick={()=>onCategoryClick('Graphics & Design')}>
                        <h3>Architecture & Interior Design</h3>
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156473/architecture-design.png" alt="" />
                    </button>
                    <button onClick={()=>onCategoryClick('Graphics & Design')}>
                        <h3>Book Design</h3>
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/af48c6702af221956ea7adf0055854e6-1745826082297/Book%20Design.png" alt="" />
                    </button>
                    <button onClick={()=>onCategoryClick('Video & Animation')}>
                        <h3>UGC Videos</h3>
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/ece24f7f595e2dd44b26567705d1c600-1728279781879/UGC%20Video%20img.png" alt="" />
                    </button>
                    <button onClick={()=>onCategoryClick('Music & Audio')}>
                        <h3>Voice Over</h3>
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156479/voice-over.png" alt="" />
                    </button>
                    <button onClick={()=>onCategoryClick('Digital Marketing')}>
                        <h3>Social Media Marketing</h3>
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/social-media-marketing.png" alt="" />
                    </button>
                    <button onClick={()=>onCategoryClick('Programming & Tech')}>
                        <h3>AI Development</h3>
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/4d23a927c9a0acf93aac6642714de09f-1745826013295/AI%20Development.png" alt="" />
                    </button>
                    <button onClick={()=>onCategoryClick('Graphics & Design')}>
                        <h3>Logo Design</h3>
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/logo-design.png" alt="" />
                    </button>
                    <button onClick={()=>onCategoryClick('Graphics & Design')}>
                        <h3>Website Design</h3>
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/9d03d60a4fbbbed75ac139f57819ab74-1745826123751/Website%20Design.png" alt="" />
                    </button>
                </div>
                <button className="arrow lift" onClick={scrollLeft} style={{ display: showLeft ? 'block' : 'none' }}><ArrowLiftIcon /></button>
                <button className="arrow right" onClick={scrollRight} style={{ display: showRight ? 'block' : 'none' }}><ArrowRightIcon /></button>

            
        </section>
    )
}