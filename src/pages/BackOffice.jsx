import { useEffect, useState } from "react";
import { SellerHeader } from "../cmps/SellerHeader";
import { MyGigs } from "../cmps/MyGigs";
import { Dashboard } from "../cmps/Dashboard";
import { useSelector } from "react-redux";
import { loadOrders, updateOrder } from "../store/orders.actions";
import { addGig, loadGigs, removeGig } from "../store/gig.actions";
import { AddGig } from "../cmps/AddGig";
import { gigService } from "../services/gig/gig.service.local";
import { useNavigate } from "react-router";

export function BackOffice() {
    const user = useSelector(storeState => storeState.userModule.user)
    const orders = useSelector(storeState => storeState.ordersModule.orders)
    const gigs = useSelector(storeState => storeState.gigModule.gigs)
    const navigate = useNavigate()
    const [isSelected, setIsSelected] = useState('dashboard')
    const [gigToEdit, setGigToEdit] = useState(gigService.getEmptyGig())

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
    function onSave() {

        addGig(gigToEdit).then(() => navigate('/gig')
        )
            .catch(err => {
                console.log('Saving gig failed', err);
            })

    }
    return (
        <section className="back-office">
            <SellerHeader setIsSelected={setIsSelected} isSelected={isSelected}/>
            <main className={isSelected === 'dashboard' ? 'white' : ''}>
                {isSelected === 'dashboard' &&
                    <Dashboard user={user} orders={orders} onChangeStatus={onChangeStatus} />}
                {isSelected === 'myGigs' &&
                    <MyGigs gigs={gigs} onRemove={onRemove} />}
                {isSelected === 'addGig' &&
                    <AddGig setGigToEdit={setGigToEdit} gigToEdit={gigToEdit} onSave={onSave} />}
            </main>
        </section>
    )
}
