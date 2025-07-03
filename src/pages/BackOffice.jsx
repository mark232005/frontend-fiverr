import { useEffect, useState } from "react";
import { SellerHeader } from "../cmps/SellerHeader";
import { MyGigs } from "../cmps/MyGigs";
import { Dashboard } from "../cmps/Dashboard";
import { useSelector } from "react-redux";
import { loadOrders, updateOrder } from "../store/orders.actions";
import { loadGigs, removeGig } from "../store/gig.actions";
import { AddGig } from "../cmps/AddGig";

export function BackOffice() {
    const user = useSelector(storeState => storeState.userModule.user)
    // const user = userService.getLoggedinUser()

    const orders = useSelector(storeState => storeState.ordersModule.orders)
    const gigs = useSelector(storeState => storeState.gigModule.gigs)
    const [isSelected, setIsSelected] = useState('dashboard')

    useEffect(() => {
        loadOrders()
        loadGigs()
    }, [])
    function onRemove(gigId) {
        removeGig(gigId)
    }
    function onChangeStatus(orderId, value) {
        const orderToUpdate = orders.find(order => order._id === orderId)
        if (!orderToUpdate) return
        const updatedOrder = { ...orderToUpdate, status: value }
        updateOrder(updatedOrder)
    }
    // const myOrders = orders.filter(order => order.seller === user.fullname)
    const myOrders = orders.filter(order => {

        return order.seller === user.fullname
    })
    console.log('myOrders', myOrders)
    const myGigs = gigs.filter(gig => gig.owner.fullname === user.fullname)
    console.log('myGigs', myGigs)
    return (
        <section className="back-office">
            <SellerHeader setIsSelected={setIsSelected} />
            <main className={isSelected === 'dashboard' ? 'white' : ''}>
                {isSelected === 'dashboard' &&
                    <Dashboard user={user} orders={myOrders} onChangeStatus={onChangeStatus} />}
                {isSelected === 'myGigs' &&
                    <MyGigs gigs={myGigs} onRemove={onRemove} />}
                {isSelected === 'addGig' &&
                    <AddGig />}
            </main>
        </section>
    )
}
