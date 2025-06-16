import { useEffect, useState } from "react";
import { SellerHeader } from "../cmps/SellerHeader";
import { MyGigs } from "../cmps/MyGigs";
import { Dashboard } from "../cmps/Dashboard";
import { useSelector } from "react-redux";
import { loadOrders, updateOrder } from "../store/orders.actions";
import { loadGigs, removeGig } from "../store/gig.actions";

export function BackOffice() {
    const user = useSelector(storeState => storeState.userModule.user)
    const orders = useSelector(storeState => storeState.ordersModule.orders)
    const gigs = useSelector(storeState => storeState.gigModule.gigs)
    const [isSelected, setIsSelected] = useState('dashboard')
    useEffect(() => {
        loadOrders()
        loadGigs()
    }, [])
function onRemove(gigId){
removeGig(gigId)
}
    function onChangeStatus(orderId, value) {
        const orderToUpdate = orders.find(order => order._id === orderId)
        if (!orderToUpdate) return
        const updatedOrder = { ...orderToUpdate, status: value }
        updateOrder(updatedOrder)
    }
    return (
        <section className="back-office">
            <SellerHeader setIsSelected={setIsSelected} />
            <main className={isSelected === 'dashboard'?'white':''}>
                {isSelected === 'dashboard' &&
                    <Dashboard user={user} orders={orders} onChangeStatus={onChangeStatus} />}
                {isSelected === 'myGigs' &&
                    <MyGigs gigs={gigs} onRemove={onRemove} />}
            </main>
        </section>
    )
}
