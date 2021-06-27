import React, { Component } from 'react';
import API from '../../api-service';
import './Cast.scss'

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
            <ul className='cast-list'>
                    {this.state.cast.map(({id, profile_path, name, character}) => (
                        <li key={id}>
                            <div className='cast-container'>
                                <img src={`${IMG_URL}/${profile_path}`} alt={name} className='cast-container_img'/>
                                <div>
                                    <h3>{name}</h3>
                                    <p>{character}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
        );
    };
};

