
import { useState } from "react"


export function ManageOrders({ user, orders, onChangeStatus }) {

    const [changeStatus, setChangeStatus] = useState('')
    // const myOrders = orders.filter(order => order.seller === user.username)
    // const myOrders = orders.filter(order => order.seller === user.fullname)
    function handleChange(orderId, status) {
        onChangeStatus(orderId, status)
        setChangeStatus('')

    }
    console.log(orders);
    console.log(user.fullname);
    
    if (!orders) return
    return (
        <section className="manage-orders">
            <h1>Welcome, {user.fullname}</h1>
            <h2>Manage Orders</h2>
            <table>
                <thead>
                    <tr >
                        <th>BUYER</th>
                        <th>GIG</th>
                        <th>DUE ON</th>
                        <th>TOTAL</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order._id} className={changeStatus === order._id ? 'relative' : ''}>
                            <td>
                                <div className="buyer-details flex">
                                    <img src={order.buyer.imgUrl} alt="" />
                                    {/* <span>{order.buyer.username}</span> */}
                                     <span>{order.buyer.fullname}</span>
                                </div>
                            </td>
                            <td>
                                <div className="gig-title flex">
                                    <img src={order.gig.imgUrl} alt="" />
                                    <span>{order.gig.name}</span>
                                </div>
                            </td>
                            <td>10/11/23</td>
                            <td>{order.gig.price}$</td>
                            <td><p onClick={() => setChangeStatus(order._id)} className={order.status}>{order.status} </p>
                                {changeStatus === order._id && <ul className="radio-status ">
                                    <li><button onClick={() => handleChange(order._id, 'COMPLETED')} >COMPLETED</button></li>
                                    <li><button onClick={() => handleChange(order._id, 'ACTIVE')} >ACTIVE</button></li>
                                    <li><button onClick={() => handleChange(order._id, 'CANELLED')}>CANELLED</button></li>
                                </ul>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}
