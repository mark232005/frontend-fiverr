
import { storageService } from '../async-storage.service'
import { makeId, saveToStorage } from '../util.service'
import { userService } from '../user'
import gigData from './data/gig-data.json'


const STORAGE_KEY = 'gig'

export const gigService = {
    query,
    getById,
    save,
    remove,
    addGigMsg,
    getDefaultFilter,
    getFilterFromSearchParams
}
window.cs = gigService


async function query(filterBy = {}) {
    let gigs = await storageService.query(STORAGE_KEY)
    const level = filterBy.level


    if (!gigs.length) {
        gigs = gigData
        _createGigs(gigs)
    }

    if (!filterBy.txt && !filterBy.category && !filterBy.level) return gigs


    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        gigs = gigs.filter(gig =>
            regex.test(gig.title) || regex.test(gig.description)
        )
    }

    if (filterBy.category) {
        gigs = gigs.filter(gig => gig.category === filterBy.category)
    }

    if (filterBy.level) {
        gigs = gigs.filter(gig => String(gig.owner?.level) === String(filterBy.level))
    }

    console.log('Filtered gigs result:', gigs)


    return gigs
}

function getById(gigId) {
    return storageService.get(STORAGE_KEY, gigId)
}

async function remove(gigId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, gigId)
}

async function save(gig) {
    var savedgig
    if (gig._id) {
        const gigToSave = {
            _id: gig._id,
            price: gig.price,
            speed: gig.speed,
        }
        savedgig = await storageService.put(STORAGE_KEY, gigToSave)
    } else {
        const gigToSave = {
            vendor: gig.vendor,
            price: gig.price,
            speed: gig.speed,
            // Later, owner is set by the backend
            owner: userService.getLoggedinUser(),
            msgs: []
        }
        savedgig = await storageService.post(STORAGE_KEY, gigToSave)
    }
    return savedgig
}

async function addGigMsg(gigId, txt) {
    // Later, this is all done by the backend
    const gig = await getById(gigId)

    const msg = {
        id: makeId(),
        by: userService.getLoggedinUser(),
        txt
    }
    gig.msgs.push(msg)
    await storageService.put(STORAGE_KEY, gig)

    return msg
}

function getDefaultFilter() {
    return {
        txt: '',
        category: '',
        level: ''
    }
}

async function _createGigs(gigs) {
    saveToStorage(STORAGE_KEY, gigs)
}



function getFilterFromSearchParams(searchParams) {
    console.log('searchParams:', searchParams)


    const txt = searchParams.get('txt') || ''
    const category = searchParams.get('category') || ''


    return { txt, category }
}