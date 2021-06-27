import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import React, { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('./pages/HomePage' /* webpackChunkName: "home_page" */));

const MovieDetailPage = lazy(() => import('./pages/MovieDetailPage' /* webpackChunkName: "home_detail_page" */));

const MoviesPage = lazy(() => import('./pages/MoviesPage' /* webpackChunkName: "movie_page" */))

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:movieId" component={MovieDetailPage} />
        <Route path="/movies" component={MoviesPage} />
      </Switch>
      </Suspense>
    </>
  );
}

export default App;