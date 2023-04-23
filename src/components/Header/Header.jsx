import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)

    const handelLogout =()=>{
        logOut()
        .then(() => {
            // Sign-out successful.
          })
        .catch((error) => {
            // An error happened.
          });
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/singUp">SingUP</Link>
                 {
                    user && <span className='text-danger'>{user.email} <button onClick={handelLogout}>Sing Out</button></span>
                 }
            </div>
        </nav>
    );
};

export default Header;