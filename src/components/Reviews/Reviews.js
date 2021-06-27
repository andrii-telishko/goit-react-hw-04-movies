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
        return (
            this.state.reviews.length > 0
                ? <ul>
                    {this.state.reviews.map(review => (
                        <li key={review.id}>
                            <h3>{review.author}</h3>
                            <p>{review.content}</p>
                        </li>
                    ))}
                </ul>
                : <h1>Hello!! There is no reviews yet</h1>);
        
    };
};



 


