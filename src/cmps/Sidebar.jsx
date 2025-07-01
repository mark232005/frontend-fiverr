
import Avatar from '@mui/material/Avatar';
import { li } from 'framer-motion/client';
import { useNavigate } from 'react-router';

export function Sidebar({ user, openSideBar, setOpenSideBar, onLogout }) {
    const navigate = useNavigate()

    function stringAvatar(name = '') {
        const parts = name.trim().split(' ')
        const first = parts[0]?.[0] || ''
        const second = parts[1]?.[0] || ''
        return {
            children: `${first}${second}`.toUpperCase()
        }
    }

    return (
        <search className={`sidebar ${openSideBar ? 'open' : ''}`}>
            <div className="sidebar-header flex">
                {!user &&
                    <button onClick={() => {
                        setOpenSideBar(false)
                        navigate('login')
                    }}>Join Alufix</button>}
                {
                    user &&
                    <>
                        <Avatar src="/static/images/avatar/1.jpg"
                            sx={{ width: 60, height: 60, cursor: 'pointer', fontSize: '0.8rem' }}>
                            {stringAvatar(user.fullname).children}
                        </Avatar>
                        <span>{user.fullname}</span>
                    </>

                }

            </div>
            <div className="sidebar-body">
                <ul>
                    {
                        !user &&
                        <li onClick={() => {
                            setOpenSideBar(false)
                            navigate('signup')
                        }}>
                            Sign in
                        </li>
                    }
                    <li onClick={() => {
                        setOpenSideBar(false)
                        navigate('gig')
                    }}>
                        Explore
                    </li>
                    <li onClick={() => {
                        setOpenSideBar(false)
                        navigate('/')
                    }}>
                        Home
                    </li>
                    {
                        user &&
                        <>
                            <li onClick={() => {
                                setOpenSideBar(false)
                                navigate('user/orders')
                            }} >Orders</li>

                            <li onClick={() => {
                                setOpenSideBar(false)
                                navigate('seller')
                            }}>seller</li>

                            <li onClick={() => {
                                setOpenSideBar(false)
                                onLogout()
                            }
                            }>Logout</li>
                        </>
                    }
                </ul>
            </div>
        </search>
    )
}