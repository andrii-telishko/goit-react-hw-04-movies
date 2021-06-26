import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailPage from './pages/MovieDetailPage'

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:movieId" component={MovieDetailPage} />
        <Route path="/movies" component={MoviesPage} />
      </Switch>
    </>
  );
}

export default App;
