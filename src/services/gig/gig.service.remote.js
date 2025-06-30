import { httpService } from '../http.service'

export const gigService = {
    query,
    getById,
    save,
    remove,
    addGigMsg,
    getFilterFromSearchParams,
    getEmptyGig
}

async function query(filterBy = {}) {
    return httpService.get(`gig`, filterBy)
}

function getById(gigId) {
    return httpService.get(`gig/${gigId}`)
}

async function remove(gigId) {
    return httpService.delete(`gig/${gigId}`)
}

async function save(gig) {
    var savedGig
    if (gig._id) {
        savedGig = await httpService.put(`gig/${gig._id}`, gig)
    } else {
        savedGig = await httpService.post('gig', gig)
    }
    return savedGig
}

async function addGigMsg(gigId, txt) {
    const savedMsg = await httpService.post(`gig/${gigId}/msg`, { txt })
    return savedMsg
}

function getFilterFromSearchParams(searchParams) {
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