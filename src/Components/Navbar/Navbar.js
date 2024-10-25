import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/fontawesome-free-solid'
import { faUser } from '@fortawesome/fontawesome-free-regular'
import { faShoppingBasket } from '@fortawesome/fontawesome-free-solid'
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid'
import "./Navbar.css"


const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <div className='hamburger'>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className='logo'>
                    <img src='https://rashki.com/cdn/shop/files/Shopify_1_175x.png?v=1718774064' />
                </div>
                <div className='profile'>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faShoppingCart} />


                </div>
            </div>
        </>
    )
}

export default Navbar