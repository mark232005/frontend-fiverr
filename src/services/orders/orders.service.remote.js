import { httpService } from '../http.service'

export const ordersService = {
    query,
    getOrderById,
    updateOrder
}

async function query() {
    return httpService.get('orders')
}

async function getOrderById(orderId) {
    return httpService.get(`orders/${orderId}`)
}

async function updateOrder(order) {
    return httpService.put(`orders/${order._id}`, order)
} 