import React, { Component } from 'react';
import API from '../../api-service'

export default class Reviews extends Component {
    state = {
        reviews: []
    };

    componentDidMount() {
        API.fetchMovieReviews(this.props.movieId).then(reviews => this.setState({ reviews: reviews }));
    };

    render() {
        return (
            this.state.reviews.length > 0
                ? <ul>
                    {this.state.reviews.map(({id, author, content}) => (
                        <li key={id}>
                            <h3>{author}</h3>
                            <p>{content}</p>
                        </li>
                    ))}
                </ul>
                : <h1>Hello!! There is no reviews yet</h1>);
        
    };
};



 


