import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext'; 

const Navbar = () => {
    const { cartItems } = useContext(ShopContext); 
    const [menu, setMenu] = useState("shop");
    const menuItems = ['shop', 'mens', 'womens', 'kids'];
    

    const getCartCount = () => {
        return Object.values(cartItems).reduce((acc, count) => acc + count, 0); 
    };

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='Shopper Logo' />
                <p>SHOPPER</p>
            </div>
            <ul className='nav-menu'>
                {menuItems.map((item) => (
                    <li key={item} onClick={() => setMenu(item)}>
                        <Link to={`/${item}`} style={{ textDecoration: 'none' }} aria-label={`Navigate to ${item}`}>
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </Link>
                        {menu === item ? <hr /> : null}
                    </li>
                ))}
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login' aria-label='Login'>
                    <button>Login</button>
                </Link>
                <Link to='/cart' aria-label='Shopping Cart'>
                    <img 
                        src={cart_icon} 
                        alt='Shopping Cart' 
                        onError={(e) => { e.target.src = 'fallback-image-url'; }} 
                    />
                </Link>
                <div className='nav-cart-count'>{getCartCount()}</div> 
            </div>
        </div>
    );
};

export default Navbar;
