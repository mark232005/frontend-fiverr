import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { logout } from '../store/user.actions'
import { Search } from '../svg.jsx'
import React, { useState, useRef } from 'react';
import { overlay, setFilterBy } from '../store/gig.actions.js'
import { ProfileModal } from './ProfileModal.jsx'
import { SET_FILTER_BY } from '../store/gig.reducer.js'
import { debounce } from '../services/util.service.js'



export function AppHeader() {
    const user = useSelector(storeState => storeState.userModule.user)
    const navigate = useNavigate()
    const [openModal, setOpenModal] = useState(false)
    const filterBy = useSelector(storeState => storeState.gigModule.filterBy)
    const dispatch = useDispatch()
    const debouncedSetFilter = useRef(debounce(handleChange, 300))

    function handleChange(ev) {

        const filterBy = ev.target.value
        dispatch({ type: SET_FILTER_BY, filterBy })


    }
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
                        onChange={debouncedSetFilter.current}
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
                                        /> : ''}
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
