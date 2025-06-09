import { storageService } from "../async-storage.service"
import { saveToStorage } from "../util.service"

const STORAGE_KEY = 'orders'
import ordersData from './data/orders-data.json'
export const ordersService = {
    query
}
async function query() {
    let orders = await storageService.query(STORAGE_KEY)
    if (!orders.length) {
        orders = ordersData
        _createOrders(orders)
    }
    return orders
}













async function _createOrders(orders) {

    saveToStorage(STORAGE_KEY, orders)

}
