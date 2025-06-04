import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { loadGigs, addGig, updateGig, removeGig, addGigMsg, overlay } from '../store/gig.actions'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { gigService } from '../services/gig/'
import { userService } from '../services/user'

import { GigFilter } from '../cmps/GigFilter'
import { GigList } from '../cmps/GigList'
import { GigLayout } from '../cmps/GigLayout'
import { NavBar } from '../cmps/Categories'
import { IndexHeader } from '../cmps/IndexHeader'
import { Sort } from '../cmps/Sort'

export function GigIndex() {

    const [filterBy, setFilterBy] = useState(gigService.getDefaultFilter())
    const gigs = useSelector(storeState => storeState.gigModule.gigs)
    const category = useSelector(storeState => storeState.gigModule.category)
    const isInputFocused = useSelector(storeState => storeState.gigModule.isInputFocused)


    useEffect(() => {
        loadGigs(filterBy)
    }, [filterBy])

    function onSetFilterBy(filterBy) {
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, ...filterBy }))
    }

    async function onremoveGig(gigId) {
        try {
            await removeGig(gigId)
            showSuccessMsg('Gig removed')
        } catch (err) {
            showErrorMsg('Cannot remove gig')
        }
    }

    async function onaddGig() {
        const gig = gigService.getEmptyGig()
        gig.vendor = prompt('Vendor?')
        try {
            const savedGig = await addGig(gig)
            showSuccessMsg(`Gig added (id: ${savedGig._id})`)
        } catch (err) {
            showErrorMsg('Cannot add gig')
        }
    }

    async function onupdateGig(gig) {
        const speed = +prompt('New speed?', gig.speed)
        if (!speed) return
        const gigToSave = { ...gig, speed }
        try {
            const savedGig = await updateGig(gigToSave)
            showSuccessMsg(`Gig updated, new speed: ${savedGig.speed}`)
        } catch (err) {
            showErrorMsg('Cannot update gig')
        }
    }
    return (
        <GigLayout category={category} onAddGig={onaddGig}>
            <div className={`overlay ${isInputFocused ? 'show' : ''}`} onClick={() => overlay(false)}></div>
            
            <NavBar />
            <header>
                <IndexHeader category={category} />
                {/* {userService.getLoggedinUser() && <button onClick={onaddGig}>Add a gig</button>} */}
            </header>
            <GigFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy} />
            <Sort count={gigs.length} />
            <GigList gigs={gigs} onRemoveGig={onremoveGig} onUpdateGig={onupdateGig} />
        </GigLayout>
    )
}