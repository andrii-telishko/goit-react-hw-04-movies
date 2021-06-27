import React, { Component } from 'react';
import RenderMovies from '../components/RenderMovies';
import API from '../api-service'

export default class MoviePage extends Component {
    state = {
        movies: JSON.parse(localStorage.getItem('movies')),
        value: ''
    };

    renderMovies = (e) => {
        e.preventDefault()
        API.fetchMoviesWithSearchQuery(this.state.value).then(movies => {
            this.setState({ movies: movies });
            localStorage.setItem('movies', JSON.stringify(movies))
        })
    };

    setValue = (e) => {
        this.setState({ value: e.target.value })
    }

    render() {
        return (
            <>
                <form onSubmit={this.renderMovies}>
                    <input type="text" value={this.state.value} onChange={this.setValue} />
                    <button type='submit'>Search</button>
                </form>
                {
                    this.state.movies.length > 0 && <RenderMovies movies={this.state.movies} />}
            </>
        );
    };
};






