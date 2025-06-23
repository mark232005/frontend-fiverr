import { NavLink } from "react-router-dom";

export function SellerHeader({isSelected,setIsSelected}) {
    return (
        <section className="seller-header">
            <header className=" flex ">
                <NavLink to="/" className="logo-txt">
                    alufix<span className="dom"></span>
                </NavLink>
                <button className={isSelected==='dashboard'?'isSelected':''} onClick={()=>setIsSelected('dashboard')}>Dashboard</button>
                <button className={isSelected==='myGigs'?'isSelected':''} onClick={()=>setIsSelected('myGigs')}>My gigs</button>
                <button className={isSelected==='addGig'?'isSelected':''} onClick={()=>setIsSelected('addGig')}>Add gigs</button>
            </header>
        </section>
    )
}