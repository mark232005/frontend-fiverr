

export function ManageOrders({ orders }) {
    return (
        <section className="manage-orders">
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
                        <tr key={order._id}>
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
                            <td><p className={order.status}>{order.status}</p></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </section>
    )
}