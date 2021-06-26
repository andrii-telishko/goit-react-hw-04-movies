import React, { Component } from 'react';
import axios from 'axios';
import RenderMovies from '../components/RenderMovies'

export default class HomePage extends Component {
    state = {
        movies: []
    };

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=cd1e7325345214650c5eb886e4454039').then(response => { this.setState({ movies: response.data.results }) });
    };

    render() {
        return (
            <RenderMovies movies={this.state.movies} />
        )
    }
};




