import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { NavBar } from "../cmps/Categories";
import React, { useState, useRef, useEffect } from 'react';
import { ArrowLiftIcon, ArrowRightIcon, ClearIcon, RightArrowIcon, Search } from '../svg.jsx'
import { NavBarHome } from "../cmps/NavBarHome.jsx";
import { PopularServices } from "../cmps/PopularServices.JSX";
import { InstantResults } from "../cmps/InstantResults.jsx";
import { useNavigate } from 'react-router'
import { SET_FILTER_BY } from "../store/gig.reducer.js";

export function HomePage() {
    const navigate = useNavigate()
    const scrollRef = useRef(null)
    const filterBy = useSelector(storeState => storeState.gigModule.filterBy)

    const [searchTxt, setSearchTxt] = useState(filterBy.txt)
    const [showLeft, setShowLeft] = useState(false)
    const [showRight, setShowRight] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        const el = scrollRef.current
        const handleScroll = () => {
            setShowLeft(el.scrollLeft > 0)
            setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth)
        }

        if (el) {
            el.addEventListener('scroll', handleScroll)
            handleScroll()
        }

        return () => {
            el?.removeEventListener('scroll', handleScroll)
        }
    }, [])
    function onSearchClick() {
        dispatch({ type: SET_FILTER_BY, filterBy: { txt: searchTxt } })
        navigate('/gig')

    }
    function scrollLeft() {
        scrollRef.current.scrollBy({ left: -10000, behavior: 'smooth' });
    }

    function scrollRight() {
        scrollRef.current.scrollBy({ left: 10000, behavior: 'smooth' });
    }

    return (
        <section className="home-page main-home-page">

            <video className="full"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/044630cc230d81edf3cc226212308295-1744042923926/hero.png"
                crossOrigin="anonymous"
                aria-hidden="true"
            >
                <source
                    src="https://fiverr-res.cloudinary.com/video/upload/v1/video-attachments/generic_asset/asset/18ad23debdc5ce914d67939eceb5fc27-1738830703211/Desktop%20Header%20new%20version"
                    type="video/mp4"
                />
            </video>
            <div className="video-content">
                <h1>Our freelancers
                    <br />
                    will take it from here
                </h1>
                <div className='search-header flex'>
                    <input type="search"
                        placeholder="Search for any service..."
                        className="search-input"
                        value={searchTxt}
                        onChange={(ev) => setSearchTxt(ev.target.value)}
                    />

                    <button className="search-btn"
                        onClick={onSearchClick}
                    >
                        <Search />
                    </button>
                    {searchTxt !== '' &&
                        <button onClick={() => setSearchTxt('')} className="clear-btn "><ClearIcon /></button>
                    }

                </div>
                <div className="btn-video flex">
                    <button>website development <RightArrowIcon /></button>
                    <button> architecture & interior design <RightArrowIcon /></button>
                    <button> UGC videos <RightArrowIcon /></button>
                    <button>video editing <RightArrowIcon /></button>
                </div>
                <div className="flex trusted">
                    <span>Trusted by:</span>
                    <div className="imgs flex">
                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta.ff37dd3.svg" alt="" />
                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google.e74f4d9.svg" alt="" />
                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix.b310314.svg" alt="" />
                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pg.22fca85.svg" alt="" />
                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal.d398de5.svg" alt="" />
                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/payoneer.7c1170d.svg" alt="" />

                    </div>
                </div>
            </div>
            <NavBarHome />
            <PopularServices
                scrollLeft={scrollLeft}
                scrollRight={scrollRight}
                scrollRef={scrollRef}
                showLeft={showLeft}
                showRight={showRight} />

            <InstantResults />
        </section >
    )
}

