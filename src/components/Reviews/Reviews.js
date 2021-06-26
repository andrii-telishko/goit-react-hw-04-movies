import React, { Component } from 'react';
import axios from 'axios';

export default class Reviews extends Component {
    state = {
        reviews: []
    }
    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.movieId}/reviews?api_key=cd1e7325345214650c5eb886e4454039`).then(response => this.setState({ reviews: response.data.results }))
    }

    render() {
        return (<ul>
            {this.state.reviews.map(review => (
                <li key={review.id}>
                    <h3>{review.author}</h3>
                    <p>{review.content}</p>
                </li>
            ))}
        </ul>)
    }
}

