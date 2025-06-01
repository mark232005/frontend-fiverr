import { useRef, useState, useEffect } from "react"
import { ArrowRightIcon, ArrowLiftIcon } from "../svg"
export function NavBar() {
    const scrollRef = useRef()
    const [canScrollRight, setCanScrollRight] = useState(false)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    useEffect(() => {
        checkScroll()
        const el = scrollRef.current
        if (!el) return

        el.addEventListener("scroll", checkScroll)
        return () => el.removeEventListener("scroll", checkScroll)
    }, [])
    const categories = [
        'Graphics & Design',
        'Programming & Tech',
        'Digital Marketing',
        'Video & Animation',
        'Writing & Translation',
        'Music & Audio',
        'Business',
        'Finance',
        'AI Service',
        'Personal Growth',
        'Consulting',
        'Data',
        'Photography'
    ]

    function checkScroll() {
        const el = scrollRef.current
        if (!el) return

        setCanScrollLeft(el.scrollLeft > 0)
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth)
    }
    function scrollRight() {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += 500
        }
    }
    function scrollLeft() {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= 500
        }

    }
    return (
        <section className="nav-bar-container ">
            {canScrollLeft &&
                <button className="scroll-btn left flex" onClick={() => scrollLeft()}>
                    <ArrowLiftIcon />
                </button>
            }
            <div className="nav-bar flex" ref={scrollRef}>
                {categories.map(category =>
                    <button className="category-btn" key={category}>{category}</button>
                )}
            </div>
            {
                canScrollRight &&
                <button className="scroll-btn right flex" onClick={() => scrollRight()}>
                    <ArrowRightIcon />
                </button>
            }

        </section>
    )
}