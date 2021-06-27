import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function RenderMovies({ movies, location }) {
    return (
        <ul>{movies.map(({id, title, name}) =>
        (<li key={id}>
            <Link to={{
                pathname: `movies/${id}`,
                state: {from: location}
            }}> {title ? title : name}</Link>
        </li>))
        }
        </ul >
    );
};

export default withRouter(RenderMovies);