import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { logout } from '../store/user.actions'
import { Search } from '../svg.jsx'
import React, { useState } from 'react';
import { overlay } from '../store/gig.actions.js'
import { ProfileModal } from './ProfileModal.jsx'


export function AppHeader() {
    const user = useSelector(storeState => storeState.userModule.user)
    const navigate = useNavigate()
    const [openModal, setOpenModal] = useState(false)

    async function onLogout() {
        try {
            await logout()
            navigate('/')
            showSuccessMsg(`Bye now`)
        } catch (err) {
            showErrorMsg('Cannot logout')
        }
    }

    return (
        <header className="app-header  ">
            <div className='full'>

            </div>
            <nav className=''>

                <NavLink to="/" className="logo-txt">
                    alufix<span className="dom"></span>
                </NavLink>

                <div className='search-header flex'>

                    <input type="search"
                        placeholder="What service are you looking for today?"
                        className="search-input"
                        onFocus={() => overlay(true)}
                        onBlur={() => overlay(true)}
                    />

                    <button className="search-btn">
                        <Search />
                    </button>
                </div>

                <div className="user-container">

                    {user && (
                        <div className="user-info flex">
                            <Link to={`user/orders`}>

                                <button > Orders</button>
                            </Link>
                            <button > Switch to selling</button>
                            {user.imgUrl &&
                                <>
                                    <img src={user.imgUrl} onClick={() => setOpenModal(prev => !prev)} />
                                    {openModal ? 
                                    <ProfileModal 
                                    logout={onLogout}
                                    navigate={navigate}
                                    />   : ''}
                                </>
                            }
                        </div>
                    )}
                    {!user &&

                        <React.Fragment>
                            <button className="sign-btn">Sign in</button>
                            <button onClick={() => navigate('login')} className="join-btn">Join</button>
                        </React.Fragment>}
                </div>

            </nav>
        </header >
    )
}
