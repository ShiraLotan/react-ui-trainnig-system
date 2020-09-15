import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/main/Dashboard';
import ProtectedRoute from './guards/ProtectedRoute ';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>



        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <ProtectedRoute path='/dashboard' component={Dashboard} />
          <Route path="/">
           <Register/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
