import React from 'react';
import { Button } from './Button';
import './Navbar.css';

function Navbar({ chartValuesP }) {
    
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div to="/" className="navbar-logo">
                        StockViz
                    </div> 
                    <Button chartValuesP={chartValuesP} ></Button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
