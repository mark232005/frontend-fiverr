import { useState } from "react"


export function ManageOrders({ user,orders, onChangeStatus }) {

    const [changeStatus, setChangeStatus] = useState('')
    function handleChange({ target }) {
        onChangeStatus(target.name, target.value)
        setChangeStatus(prev => '')
    }
    return (
        <section className="manage-orders">
            <h1>Welcome,{user.fullname}</h1>
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
                                    <span>{order.buyer.username}</span>
                                </div>
                            </td>
                            <td>
                                <div className="gig-title flex">
                                    <img src={order.gig.imgUrl} alt="" />
                                    <span>{order.gig.name}</span>
                                </div>
                            </td>
                            <td>Nov 10, 2023</td>
                            <td>{order.gig.price}$</td>
                            <td onClick={() => setChangeStatus(order._id)}><p className={order.status}>{order.status}</p>

                                {changeStatus === order._id && <div class="radio-status ">
                                    <label><input onChange={handleChange} name={order._id} type="radio" value={'Approved'} /> Approved</label>
                                    <label><input onChange={handleChange} name={order._id} type="radio" value={'Pending'} /> Pending</label>
                                    <label><input onChange={handleChange} name={order._id} type="radio" value={'Rejected'} /> Rejected</label>
                                </div>}


                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}