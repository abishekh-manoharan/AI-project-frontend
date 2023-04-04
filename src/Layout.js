import React from 'react';
import { Link, Outlet } from 'react-router-dom'

function Layout(props) {
    const farRightNavItem = {
        marginRight: 30      
    }
    return (
        <>
            <div id="navBar">
                <img src="https://placekitten.com/100/30"/>         
                <Link class="navItem" style={farRightNavItem} to="predict">Predict</Link>
                <Link class="navItem"  to="about">About</Link>
                <Link class="navItem" to="home">Home</Link>
            </div>
            <Outlet/>            
            <div id="footer">
                Group _ Final project
            </div>        
        </>
        
    );
}

export default Layout;