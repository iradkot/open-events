import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">about</Link></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
        <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
      </ul>
    </div>
  </div>
</nav>
  
    );
  }
}

export default App;