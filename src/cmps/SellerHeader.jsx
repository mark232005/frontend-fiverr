import { NavLink } from "react-router-dom";

export function SellerHeader({setIsSelected }) {
    return (
        <section className="seller-header">
            <header className=" flex ">
                <NavLink to="/" className="logo-txt">
                    alufix<span className="dom"></span>
                </NavLink>
                <button onClick={() => setIsSelected('dashboard')}>Dashboard</button>
                <button onClick={() => setIsSelected('myGigs')}>My Gigs</button>
                <button onClick={() => setIsSelected('addGig')}>Add Gigs</button>
            </header>
        </section>
    )
}