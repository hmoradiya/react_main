import React, { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Logo from '../../Assets/logo.png'
import './Navigation.scss'
import { Context } from 'react'
import { UserContext } from '../../Contexts/UserContext'
import { signOutUser } from '../../Utils/Firebase/Firebase'
import CartIcon from '../../Components/CartIcon/CartIcon'
import CartDropdown from '../../Components/CartDropdown/CartDropdown'
import { CartContext } from '../../Contexts/CartContext'

function Navigation() {

    const { currentUser } = useContext(UserContext);

    const {isCartOpen} = useContext(CartContext);


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
                    {
                        currentUser ?
                            <Link className='nav-link' onClick={signOutUser}>
                                Sign Out
                            </Link>
                            :
                            <Link className='nav-link' to='/auth'>
                                Sign In
                            </Link>
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation