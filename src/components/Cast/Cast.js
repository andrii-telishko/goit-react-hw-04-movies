import React, { Component } from 'react';
import API from '../../api-service'

export default class Cast extends Component {
    state = {
        cast: []
    }

    componentDidMount() {
        API.fetchMovieCast(this.props.movieId).then(cast => this.setState({ cast: cast }))
    };

    render() {
        return (
            <div>
                <ul>
                    {this.state.cast.map(actor => (
                        <li key={actor.id}>
                            <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} />
                            <h3>{actor.name}</h3>
                            <p>{actor.character}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };
};

