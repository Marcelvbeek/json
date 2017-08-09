import React, { Component } from 'react';
import { Link } from 'react-router'
import '../../scss/style.scss';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Link to="/">Login</Link>
        <Link to="/jsonviewer">Json-viewer</Link>
        <Link to="/add-account">Add account</Link>
        <div className="row justify-content-center">
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;