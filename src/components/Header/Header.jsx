import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogout = ()=> {
        logOut();
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.email ?
                    <button  style={{'marginLeft': '10px'}} onClick={handleLogout}className='btn-logout'>Log Out</button>
                    :
                    <Link to="/login">Login</Link>
                }
                <span style={{'marginLeft': '10px'}}>{user && user.email}</span>
            </div>
        </nav>
    );
};

export default Header;