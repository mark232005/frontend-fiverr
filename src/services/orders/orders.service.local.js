import { storageService } from "../async-storage.service"
import { saveToStorage } from "../util.service"

const STORAGE_KEY = 'orders'
import ordersData from './data/orders-data.json'
export const ordersService = {
    query,
    getOrderById,
    updateOrder
}
async function query() {
    let orders = await storageService.query(STORAGE_KEY)
    if (!orders.length) {
        orders = ordersData
        _createOrders(orders)
    }
    return orders
}

async function getOrderById(orderId){
    return storageService.get(STORAGE_KEY, orderId)
}
async function updateOrder(order){
    return storageService.put(STORAGE_KEY,order )
}













async function _createOrders(orders) {

    saveToStorage(STORAGE_KEY, orders)

}
