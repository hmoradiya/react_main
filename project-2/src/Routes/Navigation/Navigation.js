import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Logo from '../../Assets/logo.png'
import './Navigation.scss'

function Navigation() {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <img src={Logo} alt='logo' />
                </Link>
                <div className='links-container'>
                    <Link className='nav-link' to='/'>
                        Home
                    </Link>
                    <Link className='nav-link' to='/shop'>
                        Shop
                    </Link>
                    <Link className='nav-link' to='/sign-in'>
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation