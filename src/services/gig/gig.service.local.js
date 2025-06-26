
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
    getFilterFromSearchParams,
    getEmptyGig
}
window.cs = gigService


async function query(filterBy = {}) {
    let gigs = await storageService.query(STORAGE_KEY)
    const level = filterBy.level


    if (!gigs.length) {
        gigs = gigData
        _createGigs(gigs)
    }


    const hasAnyFilter =
        filterBy.txt ||
        filterBy.category ||
        filterBy.level ||
        filterBy.price ||
        filterBy.deliveryTime

    if (!hasAnyFilter) return gigs


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

    if (filterBy.price) {
        if (filterBy.price === 'Under 50₪') {
            gigs = gigs.filter(gig => gig.price < 50)
        } else if (filterBy.price === '50₪–105₪') {
            gigs = gigs.filter(gig => gig.price >= 50 && gig.price <= 105)
        } else if (filterBy.price === '105₪ and above') {
            gigs = gigs.filter(gig => gig.price > 105)
        }
    }

    if (filterBy.deliveryTime) {
        var deliveryTime
        switch (filterBy.deliveryTime) {
            case 'Express 24H':
                deliveryTime = 1
                break
            case 'Up to 3 days':
                deliveryTime = 3
                break
            case 'Up to 7 days':
                deliveryTime = 7
                break
        }
        gigs = gigs.filter(gig => +gig.daysToMake <= +deliveryTime)
    }

    return gigs
}

function getById(gigId) {
    console.log('dd');
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
            title: gig.title,
            daysToMake: gig.daysToMake,
            description: gig.about,
            description: gig.description,
            tags: gig.tags,
            category: gig.tags,
            price: gig.price,
            imgUrl: gig.imgUrl,


        }
        savedgig = await storageService.put(STORAGE_KEY, gigToSave)
    } else {
        const gigToSave = {
            title: gig.title,
            daysToMake: gig.daysToMake,
            description: gig.about,
            description: gig.description,
            tags: gig.tags,
            category: gig.tags,
            price: gig.price,
            imgUrl: gig.imgUrl,

            // Later, owner is set by the backend
            owner: userService.getLoggedinUser(),
            msgs: [],
            reviews: [],
            status: 'In stock',
            likedByUsers: []


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
        level: '',
        price: '',
        deliveryTime: ''
    }
}

async function _createGigs(gigs) {
    saveToStorage(STORAGE_KEY, gigs)
}



function getFilterFromSearchParams(searchParams) {
    console.log('searchParams:', searchParams)


    const txt = searchParams.get('txt') || ''
    const category = searchParams.get('category') || ''
    const level = searchParams.get('level') || ''
    const price = searchParams.get('price') || ''
    const deliveryTime = searchParams.get('deliveryTime') || ''


    return { txt, category, level, price, deliveryTime }
}

function getEmptyGig() {
    return {
        title: '',
        daysToMake: null,
        description: '',
        tags: '',
        category: '',
        price: null,
        imgUrl: [],
    }
}
