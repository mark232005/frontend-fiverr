import { Link, NavLink, useLocation } from 'react-router-dom'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { logout } from '../store/user.actions'
import { ClearIcon, HamburgerBtn, Search } from '../svg.jsx'
import React, { useState, useRef, useEffect } from 'react';
import { overlay } from '../store/gig.actions.js'
import { ProfileModal } from './ProfileModal.jsx'
import { SET_FILTER_BY } from '../store/gig.reducer.js'
import { NavBar } from './Categories.jsx'
import vsign from '../assets/img/img-of-v.svg'
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Sidebar } from './Sidebar.jsx'




export function AppHeader({ openSideBar, setOpenSideBar }) {
    const user = useSelector(storeState => storeState.userModule.user)
    const navigate = useNavigate()
    const [openModal, setOpenModal] = useState(false)
    const filterBy = useSelector(storeState => storeState.gigModule.filterBy)
    const [searchTxt, setSearchTxt] = useState(filterBy.txt)
    const dispatch = useDispatch()
    const location = useLocation()
    const isHomePage = location.pathname === '/'
    const isBackOffice = location.pathname === '/seller'
    const isCheckoutPage = location.pathname.includes('/checkout')
    const [showNavBar, setShowNavBar] = useState(false)
    const [showInputSearch, setShowInputSearch] = useState(false)
    const [searchParams] = useSearchParams();

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

    function stringAvatar(name = '') {
        const parts = name.trim().split(' ')
        const first = parts[0]?.[0] || ''
        const second = parts[1]?.[0] || ''
        return {
            children: `${first}${second}`.toUpperCase()
        }
    }
    function onSearchClick() {
        dispatch({ type: SET_FILTER_BY, filterBy: { txt: searchTxt } })
        const params = new URLSearchParams(searchParams);
        params.set('txt', searchTxt);
        navigate({ pathname: '/gig', search: params.toString() });
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
    if (isBackOffice) return null

    if (isCheckoutPage) {
        return (
            <header className="app-header checkout-header">
                <nav>
                    <NavLink to="/" className="logo-txt">
                        alufix<span className="dom"></span>
                    </NavLink>
                    <div className="progress-bar">
                        <div className="step active">
                            <span className="icon-wrapper"><img src={vsign} alt="checkmark" /></span>
                            <span>Order Details</span>
                        </div>
                        <span className="separator">&gt;</span>
                        <div className="step active">
                            <span className="icon-wrapper">2</span>
                            <span>Confirm & Pay</span>
                        </div>
                        <span className="separator">&gt;</span>
                        <div className="step">
                            <span className="icon-wrapper">3</span>
                            <span>Submit Requirements</span>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }

    return (

        <section className={`${isHomePage ? 'sticky-mood' : ''}`}>

            <header className="app-header">
                <nav className=''>
                    {
                        <Sidebar user={user} openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} onLogout={onLogout} />
                    }
                    <button onClick={() => setOpenSideBar(prev => !prev)} className="hamburger-btn">
                        <HamburgerBtn />
                    </button>
                    <NavLink to="/" className="logo-txt">
                        alufix<span className="dom"></span>
                    </NavLink>


                    <div className={`search-header flex ${showInputSearch ? 'showInput' : 'hidden'}`}>
                        <input type="search"
                            placeholder="What service are you looking for today?"
                            className="search-input"
                            value={searchTxt}
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
                        {
                            searchTxt !== '' &&
                            <button onClick={() => setSearchTxt('')} className="clear-btn "><ClearIcon /></button>
                        }
                    </div>

                    <div className="user-container">

                        {user && (
                            <div className="user-info flex">
                                {
                                    isHomePage &&
                                    <button onClick={() => navigate('/gig')} >Explore</button>
                                }
                                <Link to={`user/orders`}>
                                    <button > Orders</button>
                                </Link>
                                <button onClick={() => navigate('seller')} > Switch to selling</button>
                                {!user.imgUrl ?
                                    (
                                        <Stack direction="row" spacing={2}>
                                            <Badge
                                                className="custom-badge"
                                                overlap="circular"
                                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                                variant="dot"
                                            >
                                                <Avatar src="/static/images/avatar/1.jpg"
                                                    onClick={() => setOpenModal(prev => !prev)}
                                                    sx={{ width: 32, height: 32, cursor: 'pointer', fontSize: '0.8rem' }}>

                                                    {stringAvatar(user.fullname).children}
                                                </Avatar>

                                            </Badge>
                                        </Stack>)
                                    : (
                                        <Badge
                                            className="custom-badge"
                                            overlap="circular"
                                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                            variant="dot"
                                        >
                                            <Avatar
                                                src={user.imgUrl}
                                                onClick={() => setOpenModal(prev => !prev)}
                                                sx={{ width: 32, height: 32, cursor: 'pointer' }}
                                            />
                                        </Badge>
                                    )}

                                {openModal && (
                                    <ProfileModal
                                        logout={onLogout}
                                        navigate={navigate}
                                    />
                                )}
                            </div>
                        )}
                        {!user &&

                            <React.Fragment>
                                {isHomePage &&
                                    <button onClick={() => navigate('/gig')} >Explore</button>
                                }
                                <button className="sign-btn" onClick={() => navigate('signup')}>Sign in</button>
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
