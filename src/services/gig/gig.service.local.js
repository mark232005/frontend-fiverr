
import { storageService } from '../async-storage.service'
import { makeId } from '../util.service'
import { userService } from '../user'
import gigData from './data/gig-data.json'


const STORAGE_KEY = 'gig'

export const gigService = {
    query,
    getById,
    save,
    remove,
    addGigMsg,
    getDefaultFilter
}
window.cs = gigService


async function query(filterBy = { txt: '', price: 0 }) {
        let gigs = storageService.query(STORAGE_KEY)
        if (!gigs.length) {
            gigs = gigData
            gigs.forEach(gig => storageService.post(STORAGE_KEY, gig))
        }
        console.log(gigs)


        // if (txt) {
        //     const regex = new RegExp(filterBy.txt, 'i')
        //     gigs = gigs.filter(gig => regex.test(gig.vendor) || regex.test(gig.description))
        // }
        // if (maxPrice) {
        //     gigs = gigs.filter(gig => gig.price <= maxPrice)
        // }
        // if (sortField === 'title' || sortField === 'loc') {
        //     gigs.sort((gig1, gig2) =>
        //         gig1[sortField].localeCompare(gig2[sortField]) * +sortDir)
        // }
        // if (sortField === 'price' || sortField === 'daysToMake') {
        //     gigs.sort((gig1, gig2) =>
        //         (gig1[sortField] - gig2[sortField]) * +sortDir)
        // }

        // gigs = gigs.map(({ _id, vendor, price, speed, owner }) => ({ _id, vendor, price, speed, owner }))
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
            price: 0
        }
    }