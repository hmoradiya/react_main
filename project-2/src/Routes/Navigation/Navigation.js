import React, { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Logo from '../../Assets/logo.png'
import './Navigation.scss'
import { Context } from 'react'
import { UserContext } from '../../Contexts/Contexts'
import { signOutUser } from '../../Utils/Firebase/Firebase'

function Navigation() {

    const { currentUser, setCurrentUser } = useContext(UserContext);

    const signOutHandler = async () => {
        const response = await signOutUser();
        await setCurrentUser(null)
        console.log(response)   
    }

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
                            <div className='nav-link' onClick={signOutUser}>
                                Sign Out
                            </div>
                    :
                    <Link className='nav-link' to='/auth'>
                        Sign In
                    </Link>
                    }
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation