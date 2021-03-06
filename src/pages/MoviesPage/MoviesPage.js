import React, { Component } from 'react';
import RenderMovies from '../../components/RenderMovies';
import API from '../../api-service'
import './MoviesPage.scss'

export default class MoviePage extends Component {
    state = {
        movies: JSON.parse(localStorage.getItem('movies')),
        value: ''
    };

    renderMovies = (e) => {
        e.preventDefault();
        API.fetchMoviesWithSearchQuery(this.state.value).then(movies => {
            this.setState({ movies: movies });
            localStorage.setItem('movies', JSON.stringify(movies));
            if (this.state.movies.length === 0) {
            alert('We could not find movies with this query')
            };
        });
    };

    setValue = (e) => {
        this.setState({ value: e.target.value });
    };

    render() {
        const { value, movies } = this.state;
        return (
            <>
                <form onSubmit={this.renderMovies}>
                    <input type="text" value={value} onChange={this.setValue} className='input'/>
                    <button type='submit'>Search</button>
                </form>
                {movies.length > 0 && <RenderMovies movies={movies} />}
            </>
        );
    };
};






