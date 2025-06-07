


// pages/OrderIndex.jsx

import { useEffect, useState } from 'react'
import { orderService } from '../services/order/order.service.local.js'

export function GigOrders() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    loadOrders()
  }, [])

  async function loadOrders() {
    const orders = await orderService.query()
    setOrders(orders)
  }

  return (
    <section className="order-index">
      <h2>Your Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            <h4>Order for Gig: {order.gigId}</h4>
            <p>Seller: {order.seller.fullname}</p>
            <p>Status: {order.status}</p>
            <p>Price: ${order.price}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
