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
        const IMG_URL = 'https://image.tmdb.org/t/p/w500'
        return (
            <div>
                <ul>
                    {this.state.cast.map(({id, profile_path, name, character}) => (
                        <li key={id}>
                            <img src={`${IMG_URL}/${profile_path}`} alt={name} />
                            <h3>{name}</h3>
                            <p>{character}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };
};

