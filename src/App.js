import React from 'react';
import './App.scss';
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
import { connect } from 'react-redux';
import userLogout from './state/thunk/logoutUser';

function App({ isSignin, email, handleLogout }) {

  const logoutUser =()=>{
    handleLogout(email)
  }

  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          {isSignin ? <ul>
            <li onClick={logoutUser}>
              <Link to="/" >Logout</Link>
            </li>
          </ul> :
          <ul>
            <li>
              <Link to="/" >Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          }
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

const mapStateToProps = (state) => ({
  isSignin: state.signinReducer.isSignin,
  email: state.signinReducer.email
})

const mapDispatchToProps = dispatch => {
  return {
    handleLogout: (email) => dispatch(userLogout(email))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

