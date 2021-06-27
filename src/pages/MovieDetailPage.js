import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews'

export default class MovieDetailPage extends Component {
    state = {
        poster_path: '',
        title: '',
        vote_average: '',
        overview: '',
        genres: [],
        showAdds: false
    };

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=cd1e7325345214650c5eb886e4454039`).then(response => this.setState({ ...response.data }))
    };

    handleGoBack = () => {
        const { location, history } = this.props;

        if (location.state && location.state.from) {
          return history.push(location.state.from);
        }

         history.push('/');
    };

    render() {
        const IMG_URL = 'https://image.tmdb.org/t/p/w500'
        return (
            <>
                <button type="button" onClick={this.handleGoBack}>Go Back</button>
                <div>
                    <img src={`${IMG_URL}/${this.state.poster_path}`} alt={this.state.title} />
                    <h2>{this.state.title}</h2>
                    <p>Movie rating: {this.state.vote_average}</p>
                    <h3>Overview</h3>
                    <p>{this.state.overview}</p>
                    <h3>Genres</h3>
                    <ul>{this.state.genres.map(genre =>
                        <li key={genre.id}>{genre.name}</li>)}
                    </ul>
                </div>
                <p>Additional information</p>
                <ul>
                    <li>
                        <Link to={`/movies/${this.props.match.params.movieId}/cast`}>Cast</Link>
                    </li>
                    <li>
                        <Link to={`/movies/${this.props.match.params.movieId}/reviews`}>Reviews</Link>
                    </li>
                </ul>
                <Route path='/movies/:movieId/cast' render={props => {
                    return (< Cast movieId={props.match.params.movieId} />)
                }} />
                <Route path='/movies/:movieId/reviews'
                    render={props => {
                        return < Reviews movieId={props.match.params.movieId} />
                    }} />
            </>
        );
    };
};