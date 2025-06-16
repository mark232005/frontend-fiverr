import { ordersService } from "../services/orders/gig.service.local"


import { store } from '../store/store'
import { SET_ORDERS, UPDATE_ORDER } from "./orders.reducer"


export async function loadOrders() {
    try {
        const orders = await ordersService.query()
        store.dispatch({ type: SET_ORDERS, orders })
    } catch (err) {
        console.log('Cannot load orders', err)
        throw err
    }
}
export async function updateOrder(newOrder) {
    try {
const order= await ordersService.updateOrder(newOrder)
store.dispatch({type:UPDATE_ORDER,order})
    } 
    catch {
        console.log('Cannot update order', err)
        throw err

    }
}
