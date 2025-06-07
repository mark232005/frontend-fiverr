


// pages/OrderIndex.jsx

import { useEffect, useState } from 'react'
import { orderService } from '../services/order/order.service.local.js'
import { gigService } from '../services/gig/gig.service.local.js'


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
            <h2>My Order</h2>
            <ul>
                {orders.map(order => {
                    const gig = gigsMap[order.gigId]

                    return (
                        <li key={order._id} className="order-preview">
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
                                <div className='order-img'>
                                    {gig && <img src={gig.imgUrl} alt={gig.title} style={{ width: '100px' }} />}
                                </div>
                                <div className='gig-info'>
                                    <h4>{gig ? gig.title : order.gigId}</h4>
                                    <h4>Graphics & Design</h4> {/* need to finish this */}
                                    <p>From: {order.seller.fullname}</p>
                                </div>
                                <div className='order-data'>
                                    <div className='order'>
                                        <h4>ORDER NO.</h4>
                                        <span>{orderNumber}</span>
                                    </div>
                                    <div className='delivery'>
                                        <h4>Delivery in:</h4>
                                        <span>{deliveryDays} days</span>
                                    </div>
                                    <div className='order-button'>
                                        <button>VIEW ORDER</button>
                                    </div>

                                </div>
                            </div>

                        </li>
                    )
                })}
            </ul>
        </section>
    )

}
