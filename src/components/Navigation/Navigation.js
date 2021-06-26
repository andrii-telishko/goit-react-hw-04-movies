import { NavLink } from 'react-router-dom';
import React from 'react';

const Navigation = () => {
    return (
        <ul>
            <NavLink
                exact
                to="/"
                className="NavLink"
                activeClassName="NavLink--active"
            >Home</NavLink>
            <NavLink
                to="/movies"
                className="NavLink"
                activeClassName="NavLink--active"
            >Movies</NavLink>
        </ul>
    );
};

export default Navigation