import React from 'react';
import { Link, Outlet } from 'react-router-dom'

function Header(props) {
    return (
        <div>            
            <Link to="home">Home</Link>
            <Link to="about">About</Link>
            <Outlet/>
        </div>
        
    );
}

export default Header;