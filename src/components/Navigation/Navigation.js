import { NavLink } from 'react-router-dom';
import React from 'react';
import routes from '../../routes';
import './Navigation.scss'

const Navigation = () => {
    return (
    <nav className='navigation'>
        <ul>
            <NavLink
                exact
                to={routes.home}
                className="NavLink"
                activeClassName="NavLink--active"
            >Home</NavLink>
            <NavLink
                to={routes.movies}
                className="NavLink"
                activeClassName="NavLink--active"
            >Movies</NavLink>
        </ul >
    </nav>
        );
};

export default Navigation