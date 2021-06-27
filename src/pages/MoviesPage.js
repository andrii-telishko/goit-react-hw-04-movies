import React, { Component } from 'react';
import axios from 'axios';
import RenderMovies from '../components/RenderMovies'

export default class MoviePage extends Component {
    state = {
        movies: JSON.parse(localStorage.getItem('movies')),
        value: ''
    };

    renderMovies = (e) => {
        e.preventDefault()
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=cd1e7325345214650c5eb886e4454039&query=${this.state.value}`).then(response => {
            this.setState({ movies: response.data.results });
            localStorage.setItem('movies', JSON.stringify(response.data.results))
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


