


// pages/OrderIndex.jsx

import { useEffect, useState } from 'react'
import { orderService } from '../services/order/order.service.local.js'
import { gigService } from '../services/gig/gig.service.local.js'


export function GigOrders() {
    const [orders, setOrders] = useState([])
    const [gigsMap, setGigsMap] = useState({})


    useEffect(() => {
        loadOrders()
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
        <h2>My Order</h2>
        <ul>
            {orders.map(order => {
                const gig = gigsMap[order.gigId] 

                return (
                    <li key={order._id}>
                        <div className='order-info'>
                            <h3>ORDER STATUS</h3>
                            <p>{order.status}</p>
                            <p className='date'>
                                Due date: {order?.dueDate ? new Date(order.dueDate).toLocaleDateString('en-GB', {
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric'
                                }) : 'No due date'}
                            </p>
                        </div>
                        <div className='gig-order'>
                            {gig && <img src={gig.imgUrl} alt={gig.title} style={{ width: '100px' }} />}
                        </div>
                        <h4>Order for Gig: {gig ? gig.title : order.gigId}</h4>
                        <p>Seller: {order.seller.fullname}</p>
                        <p>Price: ${order.price}</p>
                    </li>
                )
            })}
        </ul>
    </section>
)

}
