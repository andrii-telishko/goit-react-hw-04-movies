import React, { Component } from 'react';
import axios from 'axios';

export default class Cast extends Component {
    state = {
        cast: []
    }

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.movieId}/credits?api_key=cd1e7325345214650c5eb886e4454039`).then(response => this.setState({ cast: response.data.cast }))
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
}