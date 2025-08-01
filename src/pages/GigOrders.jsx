// pages/OrderIndex.jsx

import { useEffect, useState } from 'react'
// import { orderService } from '../services/orders/orders.service.local.js'
// import { gigService } from '../services/gig/gig.service.local.js'
import { useLocation } from 'react-router'
// import { GigLayout } from '../cmps/GigLayout'
import { loadOrders } from '../store/orders.actions'
import { useSelector } from 'react-redux'
import { userService } from '../services/user'


export function GigOrders() {
    // const [orders, setOrders] = useState([])
    const [gigsMap, setGigsMap] = useState({})
    const [orderNumber, setOrderNumber] = useState(null)
    const [deliveryDays, setDeliveryDays] = useState(null)
    const [currTab, setCurrTab] = useState('ACTIVE')
    const location = useLocation()
    const isOrderPage = location.pathname === 'user/orders'
    const orders = useSelector(storeState => storeState.ordersModule.orders)
    const user = userService.getLoggedinUser()

    useEffect(() => {
        loadOrders()
        const randomOrderNumber = Math.floor(100000000 + Math.random() * 900000000)
        setOrderNumber(randomOrderNumber)
        const randomDays = Math.floor(Math.random() * 14) + 1
        setDeliveryDays(randomDays)
    }, [])
    function countOrders() {
        return myOrders.reduce((acc, order) => {
            acc[order.status] = (acc[order.status] || 0) + 1
            return acc
        }, {})
    }

    const myOrders = orders.filter(order => order.buyer.fullname === user.fullname)
    const orderCounts = countOrders()
    return (
        <section className="order-index">
            <h2>My Orders</h2>
            <ul className="tabs">
                <li onClick={() => setCurrTab('ACTIVE')} className={currTab === 'ACTIVE' ? 'active select' : ''}>ACTIVE <span className="tab-count">{orderCounts['ACTIVE']}</span></li>
                <li onClick={() => setCurrTab('COMPLETED')} className={currTab === 'COMPLETED' ? 'active select' : ''} >COMPLETED <span className="tab-count">{orderCounts['COMPLETED']}</span></li>
                <li onClick={() => setCurrTab('CANELLED')} className={currTab === 'CANELLED' ? 'active select' : ''}>CANELLED <span className="tab-count">{orderCounts['CANELLED']}</span></li>
                <li onClick={() => setCurrTab('ALL')} className={currTab === 'ALL' ? 'active select' : ''}>ALL <span className="tab-count">{myOrders.length}</span></li>
            </ul>

            <div className="order-layout">
                <table>
                    <thead>
                        <tr>
                            <th colSpan="2" className="title"><span>{currTab} </span>ORDERS</th>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>ORDER DATE</td>
                            <td>Due on</td>
                            <td>TOTAL</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {myOrders
                            .filter(order => currTab === 'ALL' || order.status === currTab)
                            .map(order => {

                                const gig = gigsMap[order.gigId]
                                return (
                                    <tr key={order._id}>
                                        <td></td>
                                        <td>
                                            <div className="gig-with-img flex">
                                                <img src={order.gig.imgUrl || 'https://via.placeholder.com/80'} alt={gig?.title || 'Gig'} width="80" />
                                                <p>{order.gig.name || order.gigId}</p>
                                            </div>
                                        </td>
                                        <td>
                                            <span>
                                                {order?.orderDate ? new Date(order.dueDate).toLocaleDateString('en-GB', {
                                                    day: 'numeric',
                                                    month: 'short',
                                                    year: 'numeric'
                                                }) : 'No due date'}
                                            </span>
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
                                        <td>${order.gig.price || 11}</td>
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
