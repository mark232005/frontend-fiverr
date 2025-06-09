


export function ProfileModal({logout,navigate}){
    return(
       <section className="profile-modal flex">
        <button onClick={()=>navigate('/profile')}>Profile</button>
        <button>Add gig</button>
        <button onClick={()=>logout()}>Logout</button>
       </section>
    )
}