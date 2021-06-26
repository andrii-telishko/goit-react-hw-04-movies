import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
      </Switch>
    </>
  );
}

export default App;
