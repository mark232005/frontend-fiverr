import { httpService } from '../http.service.js'

export const orderService = {
    query,
    add
}

async function query() {
    return httpService.get('order')
}

async function add(order) {
    return httpService.post('order', order)
} 