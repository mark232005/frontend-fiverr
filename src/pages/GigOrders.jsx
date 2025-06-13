// pages/OrderIndex.jsx

import { useEffect, useState } from 'react'
import { orderService } from '../services/order/order.service.local.js'
import { gigService } from '../services/gig/gig.service.local.js'
import { GigLayout } from '../cmps/GigLayout'


export function GigOrders() {
    const [orders, setOrders] = useState([])
    const [gigsMap, setGigsMap] = useState({})
    const [orderNumber, setOrderNumber] = useState(null)
    const [deliveryDays, setDeliveryDays] = useState(null)

    useEffect(() => {
        loadOrders()
        const randomOrderNumber = Math.floor(100000000 + Math.random() * 900000000)
        setOrderNumber(randomOrderNumber)
        const randomDays = Math.floor(Math.random() * 14) + 1
        setDeliveryDays(randomDays)
    }, [])

    async function loadOrders() {
        const orders = await orderService.query()
        setOrders(orders)

        const gigs = await Promise.all(orders.map(order => gigService.getById(order.gigId)))
        const map = {}
        gigs.forEach(gig => {
            if (gig) map[gig._id] = gig
        })
        setGigsMap(map)
    }

    return (
            <section className="order-index">
                <h2>My Orders</h2>
                <div className="order-layout">
                    <table>
                        <thead>
                            <tr>
                                <th>Seller</th>
                                <th>Gig</th>
                                <th>Package</th>
                                <th>Category</th>
                                <th>Due on</th>
                                <th>Total</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => {
                                const gig = gigsMap[order.gigId]
                                return (
                                    <tr key={order._id}>
                                        <td>
                                            <div className="user-with-img flex">
                                                <img src={gig?.owner?.imgUrl || 'https://via.placeholder.com/40'} alt={order.seller.fullname} width="40" />
                                                <span>{order.seller.fullname}</span>

                                            </div>
                                        </td>
                                        <td>
                                            <div className="gig-with-img flex">

                                                <img src={gig?.imgUrl || 'https://via.placeholder.com/80'} alt={gig?.title} width="80" />
                                                <p>{gig?.title || order.gigId}</p>
                                            </div>
                                        </td>
                                        <td>
                                            <span>{order.package || 'Bronze'}</span>
                                        </td>
                                        <td>
                                            <span>{gig?.category || 'Graphics & Design'}</span>
                                        </td>
                                        <td>
                                            <span>
                                                {order?.dueDate ? new Date(order.dueDate).toLocaleDateString('en-GB', {
                                                    day: 'numeric',
                                                    month: 'short',
                                                    year: 'numeric'
                                                }) : 'No due date'}
                                            </span>
                                        </td>
                                        <td>${order.total || 11}</td>
                                        <td>
                                            <p className={`status ${order.status}`}>{order.status}</p>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
    )
}
