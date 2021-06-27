import React from 'react';
import routes from '../../routes';
import {Link, withRouter } from 'react-router-dom';

function MovieCardNavAdds({id, location}) {
    return (
        <ul>
                    <li>
                        <Link to={{
                            pathname: `${routes.movies}/${id}/cast`,
                            state: { from: location }
                        }}
                        >Cast</Link>
                    </li>
                    <li>
                        <Link to={{
                            pathname: `${routes.movies}/${id}/reviews`,
                            state: { from: location }
                        }}
                        >Reviews</Link>
                    </li>
                </ul>
    );
};

export default withRouter(MovieCardNavAdds);