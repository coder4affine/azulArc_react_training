import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import PrivateRoute from './components/PrivateRoute';
import NoMatch from './pages/NoMatch';
import routes from './route';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        {routes.map(x => (
          <Route key={x.path} {...x} />
        ))}
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
};

export default App;
