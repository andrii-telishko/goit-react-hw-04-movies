import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './RenderMovies.scss'

function RenderMovies({ movies, location }) {
    return (
        <ul>{movies.map(({id, title, name}) =>
        (<li key={id} >
            <Link to={{
                pathname: `movies/${id}`,
                state: {from: location}
            }} className='movie-link'> {title ? title : name}
             </Link>
        </li>))
        }
        </ul >
    );
};

export default withRouter(RenderMovies);