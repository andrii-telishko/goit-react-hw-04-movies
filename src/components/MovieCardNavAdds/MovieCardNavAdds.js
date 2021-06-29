import React from 'react';
import routes from '../../routes';
import { Link, withRouter } from 'react-router-dom';
import './MovieCardNavAdds.scss'

function MovieCardNavAdds({id, location}) {
    return (
        <ul className='adds-list'>
                    <li>
                        <Link to={{
                            pathname: `${routes.movies}/${id}/cast`,
                            state: { from: location.state.from }
                        }} className='adds-link'
                        >Cast</Link>
                    </li>
                    <li>
                        <Link to={{
                            pathname: `${routes.movies}/${id}/reviews`,
                            state: { from: location.state.from }
                        }} className='adds-link'
                        >Reviews</Link>
                    </li>
                </ul>
    );
};

export default withRouter(MovieCardNavAdds);