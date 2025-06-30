import { AboutUser } from "./AboutUser";
import { ManageOrders } from "./ManageOrders";



export function Dashboard({ user, orders, onChangeStatus }) {
    console.log('Dashboard',orders)
    console.log('user', user)

    if(!orders) return
    return (
        <section className="flex dashboard">
            <AboutUser user={user} />
            <ManageOrders   user={user}  orders={orders} onChangeStatus={onChangeStatus} />

        </section>
    )
}