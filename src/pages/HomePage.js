import React, { Component } from 'react';
import RenderMovies from '../components/RenderMovies';
import API from '../api-service'

export default class HomePage extends Component {
    state = {
        movies: []
    };

    componentDidMount() {
        API.fetchTrendingMovies().then(movies => { this.setState({ movies: movies }) });
        localStorage.setItem('movies', JSON.stringify([]))
    };

    render() {
        return (
            <>
                <h1>Trending movies today</h1>
                <RenderMovies movies={this.state.movies} />
            </>
        );
    };
};





