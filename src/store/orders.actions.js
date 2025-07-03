import { ordersService } from "../services/orders"


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
      console.log('newOrder',newOrder);
      const order = await ordersService.updateOrder(newOrder)
      store.dispatch({ type: UPDATE_ORDER, order })
      console.log('updated order from server', order)
    } catch (err) {
      console.error('Cannot update order', err)
      throw err
    }
  }