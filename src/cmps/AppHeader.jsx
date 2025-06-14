import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { logout } from '../store/user.actions'
import { Search } from '../svg.jsx'
import React, { useState, useRef, useEffect } from 'react';
import { overlay, setFilterBy } from '../store/gig.actions.js'
import { ProfileModal } from './ProfileModal.jsx'
import { SET_FILTER_BY } from '../store/gig.reducer.js'
import { debounce } from '../services/util.service.js'
import { NavBar } from './Categories.jsx'
import { useLocation } from 'react-router-dom'


export function AppHeader() {
    const user = useSelector(storeState => storeState.userModule.user)
    const navigate = useNavigate()
    const [openModal, setOpenModal] = useState(false)
    const filterBy = useSelector(storeState => storeState.gigModule.filterBy)
    const [searchTxt, setSearchTxt] = useState('')
    const dispatch = useDispatch()
    const location = useLocation()
    const isHomePage = location.pathname === '/'
    const [showNavBar, setShowNavBar] = useState(false)
    const [showInputSearch, setShowInputSearch] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            setShowNavBar(scrollY > 850)
            setShowInputSearch(scrollY > 430)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    function onSearchClick() {
        dispatch({ type: SET_FILTER_BY, filterBy: { txt: searchTxt } })
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
        <section className={`${isHomePage ? 'sticky-mood' : ''}`}>

            <header className="app-header">
                <nav className=''>
                    <NavLink to="/" className="logo-txt">
                        alufix<span className="dom"></span>
                    </NavLink>

                    <div className={`search-header flex ${showInputSearch?'showInput':'hidden'}`}>

                        <input type="search"
                            placeholder="What service are you looking for today?"
                            className="search-input"
                            onChange={(ev) => setSearchTxt(ev.target.value)}
                            onFocus={() => overlay(true)}
                            onBlur={() => overlay(true)}
                        />

                        <button className="search-btn"
                            onClick={onSearchClick}
                            onFocus={() => overlay(false)}
                            onBlur={() => overlay(false)}>
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
            {!isHomePage && <NavBar />}
            {isHomePage && (
                <div className={`categories-bar ${showNavBar ? 'show' : ''}`}>
                    <NavBar />
                </div>
            )}
        </section>
    )
}
