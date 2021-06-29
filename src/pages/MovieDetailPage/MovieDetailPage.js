import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import routes from '../../routes';
import API from '../../api-service';
import MovieCard from '../../components/MovieCard';
import MovieCardNavAdds from '../../components/MovieCardNavAdds';
import './MovieDetailPage.scss'


class MovieDetailPage extends Component {
    state = {
        poster_path: '',
        title: '',
        vote_average: '',
        overview: '',
        genres: [],
    };

    componentDidMount() {
        API.fetchMovieDetails(this.props.match.params.movieId).then(data => this.setState({ ...data }))
    };

    handleGoBack = () => {
        const { location, history } = this.props;

        if (location.state && location.state.from) {
          return history.push(location.state.from);
        } 

        
         history.push(`${routes.home}`);
    };

    render() {
        const { poster_path, title, vote_average, overview, genres } = this.state;
        const { movieId } = this.props.match.params;
        const { location } = this.props;
        return (
            <>
                <button type="button" onClick={this.handleGoBack} className='back-button'>Go Back</button>
                <MovieCard poster={poster_path}
                    title={title}
                    rating={vote_average}
                    descr={overview}
                    genres={genres }/>
                <h2>Additional information</h2>
                <MovieCardNavAdds id={movieId} location={ location }/>
                <Route path={`${routes.cast}`} render={props => {
                    return (< Cast movieId={props.match.params.movieId} />)
                }} />
                <Route path={`${routes.reviews}`}
                    render={props => {
                        return < Reviews movieId={props.match.params.movieId} />
                    }} />
            </>
        );
    };
};

export default MovieDetailPage;

