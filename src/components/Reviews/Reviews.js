import React, { Component } from 'react';
import API from '../../api-service'

export default class Reviews extends Component {
    state = {
        reviews: []
    };

    componentDidMount() {
        API.fetchMovieReviews(this.props.movieId).then(reviews => this.setState({ reviews: reviews }))
    };

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
};



 


