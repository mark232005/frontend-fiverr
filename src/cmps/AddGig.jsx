import { section } from "framer-motion/client";
import { ArrowRightIcon } from "../svg";
import { useState } from "react";



export function AddGig() {
    const [currStep, setCurrStep] = useState(1)
    return (
        <section className="add-gig">
            <div className="navbar-add-gig ">
                <ul className="flex">
                    <li>
                        <span className={`icon flex ${currStep === 1 ? 'currStep' : ''}`}>1</span>
                        <p> Overview</p>
                        <span className="svg"><ArrowRightIcon /></span>
                    </li>
                    <li>
                        <span className={`icon flex ${currStep === 2 ? 'currStep' : ''}`}>2</span>
                        <p>Pricing</p>
                        <span className="svg"><ArrowRightIcon /></span>
                    </li>
                    <li>
                        <span className={`icon flex ${currStep === 3 ? 'currStep' : ''}`}>3</span>
                        <p>  Description & FAQ</p>
                        <span className="svg"><ArrowRightIcon /> </span>
                    </li>
                    <li>
                        <span className={`icon flex ${currStep === 4 ? 'currStep' : ''}`}>4</span>
                        <p>Requirements</p>
                        <span className="svg"><ArrowRightIcon /></span>
                    </li>
                    <li>
                        <span className={`icon flex ${currStep === 5 ? 'currStep' : ''}`}>5</span>
                        <p>Gallery</p>
                        <span className="svg"><ArrowRightIcon /></span>
                    </li>
                    <li>
                        <span className={`icon flex ${currStep === 6 ? 'currStep' : ''}`}>6</span>
                        <p>Publish</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}