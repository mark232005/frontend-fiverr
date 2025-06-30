import { storageService } from '../async-storage.service.js'
import { demoOrders } from './data/order-data.js'

const STORAGE_KEY = 'orderDB'

export const orderService = {
    query,
    add
}

async function query() {
    let orders = await storageService.query(STORAGE_KEY)
    if (!orders.length) {
        for (const order of demoOrders) {
            await storageService.post(STORAGE_KEY, order)
        } orders = await storageService.query(STORAGE_KEY)
    }
    return orders
}

async function add(order) {
    return storageService.post(STORAGE_KEY, order)
}