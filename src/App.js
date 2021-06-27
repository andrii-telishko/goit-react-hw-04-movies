import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import React, { Suspense, lazy } from 'react';
import routes from './routes'

const HomePage = lazy(() => import('./pages/HomePage' /* webpackChunkName: "home_page" */));

const MovieDetailPage = lazy(() => import('./pages/MovieDetailPage' /* webpackChunkName: "home_detail_page" */));

const MoviesPage = lazy(() => import('./pages/MoviesPage' /* webpackChunkName: "movie_page" */))

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.detailsMovies} component={MovieDetailPage} />
        <Route path={routes.movies} component={MoviesPage} />
      </Switch>
      </Suspense>
    </>
  );
}

export default App;