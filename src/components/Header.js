import React from 'react';
import { NavLink } from 'react-router-dom';

const navLinkStyleSelected = ({isActive}) => {
    if (isActive) {
        return `is-active`
    }
};

const Header = () => (
    <header>
    <h1> Hello! I'm the Header. </h1>
    <NavLink to="/" className={navLinkStyleSelected}> Go home!</NavLink> <br/>
    <NavLink to="/create" className={navLinkStyleSelected}> Add an expense</NavLink> <br/>
    <NavLink to="/help" className={navLinkStyleSelected}> Get help</NavLink> <br/>
    </header>
);

export default Header;