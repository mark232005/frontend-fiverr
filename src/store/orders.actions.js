import { ordersService } from "../services/orders/gig.service.local"


import { store } from '../store/store'
import { SET_ORDERS } from "./orders.reducer"


export async function loadOrders() {
    try {
        const orders = await ordersService.query()
        store.dispatch({ type: SET_ORDERS, orders })
    } catch (err) {
        console.log('Cannot load orders', err)
        throw err
    }
}
