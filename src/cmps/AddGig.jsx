import { ArrowRightIcon, CheckMarkIcon } from "../svg";
import { useState } from "react";
import * as React from 'react';
import { Overview } from "./Overview";
import { Pricing } from "./Pricing";
import { Description } from "./Description";
import { Gallery } from "./Gallery";
import { Publish } from "./Publish";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { gigService } from "../services/gig/gig.service.local";
import { addGig } from "../store/gig.actions";
import { Loader } from "./Loader";



export function AddGig() {
    const [currStep, setCurrStep] = useState(1)
    const { gigId } = useParams()
    const [gigToEdit, setGigToEdit] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (gigId) {
            gigService.getById(gigId).then(gig => {
                setGigToEdit(gig)
            })
        } else {
            setGigToEdit(gigService.getEmptyGig())
        }
    }, [gigId])
    function onSave() {
        addGig(gigToEdit).then(() => navigate('/gig')
        )
            .catch(err => {
                console.log('Saving gig failed', err);
            })
    }


    function stripHtml(html) {
        const div = document.createElement("div")
        div.innerHTML = html
        return div.textContent || div.innerText || ""
    }

    function createGig(name, value) {
        setGigToEdit(prev => ({ ...prev, [name]: value }))
    }
    function isStepValid() {
        switch (currStep) {
            case 1:
                return gigToEdit.title?.length >= 15 && gigToEdit.tags
            case 2:
                return gigToEdit.price && gigToEdit.daysToMake
            case 3:
                return gigToEdit.description && stripHtml(gigToEdit.description).length >= 400
            case 4:
                return gigToEdit.imgUrl?.length > 0
            default:
                return true
        }
    }
    if (!gigToEdit) return <Loader/>
    return (
        <section className="add-gig">
            <div className="navbar-add-gig ">
                <ul className="flex">
                    <li className={currStep > 1 ? 'finish' : ''}>
                        <span className={`icon flex ${currStep === 1 ? 'currStep' : ''}`}>{currStep > 1 ? <CheckMarkIcon /> : 1}</span>
                        <p> Overview</p>
                        <span className="svg"><ArrowRightIcon /></span>
                    </li>
                    <li className={currStep > 2 ? 'finish' : ''}>
                        <span className={`icon flex ${currStep === 2 ? 'currStep' : ''}`}>{currStep > 2 ? <CheckMarkIcon /> : 2}</span>
                        <p>Pricing</p>
                        <span className="svg"><ArrowRightIcon /></span>
                    </li>
                    <li className={currStep > 3 ? 'finish' : ''}>
                        <span className={`icon flex ${currStep === 3 ? 'currStep' : ''}`}>{currStep > 3 ? <CheckMarkIcon /> : 3}</span>
                        <p>  Description & FAQ</p>
                        <span className="svg"><ArrowRightIcon /> </span>
                    </li>
                    <li className={currStep > 4 ? 'finish' : ''}>
                        <span className={`icon flex ${currStep === 4 ? 'currStep' : ''}`}>{currStep > 4 ? <CheckMarkIcon /> : 4}</span>
                        <p>Gallery</p>
                        <span className="svg"><ArrowRightIcon /></span>
                    </li>
                    <li className={currStep > 5 ? 'finish' : ''}>
                        <span className={`icon flex ${currStep === 5 ? 'currStep' : ''}`}>{currStep > 5 ? <CheckMarkIcon /> : 5}</span>
                        <p>Publish</p>
                    </li>
                </ul>
            </div>
            <main>
                {
                    currStep === 1 &&
                    <Overview createGig={createGig} gig={gigToEdit} />
                }
                {
                    currStep === 2 &&
                    <Pricing createGig={createGig} gig={gigToEdit} />
                }
                {
                    currStep === 3 &&
                    <Description createGig={createGig} gig={gigToEdit} stripHtml={stripHtml} />
                }
                {
                    currStep === 4 &&
                    <Gallery createGig={createGig} gig={gigToEdit} />
                }
                {
                    currStep === 5 &&
                    <Publish save={onSave} />
                }
                {
                    currStep !== 5 ?
                        <button onClick={() => {
                            if (!isStepValid()) {
                                alert("Please complete all required fields before continuing.")
                                return
                            }
                            setCurrStep(prev => prev + 1)
                        }} className="save-btn">Save & Continue</button> :
                        <button onClick={() => onSave()} className="save-btn">Publish Gig</button>

                }
            </main>
        </section >
    )
}