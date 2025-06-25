import { AboutUser } from "../cmps/AboutUser";
import { useSelector } from 'react-redux'
import { ManageOrders } from "../cmps/ManageOrders";
import { userService } from "../services/user/user.service.local";
import { useEffect } from "react";
import { loadOrders } from "../store/orders.actions";

export function ProfilePage() {
    useEffect(()=>{
loadOrders()
    },[])
    const user = useSelector(storeState => storeState.userModule.user)
    const orders = useSelector(storeState => storeState.ordersModule.orders)

    return (

        <section className="profile-page flex">
            <AboutUser user={user}/>
            <ManageOrders orders={orders} user={user}/>
        </section>

    )
}