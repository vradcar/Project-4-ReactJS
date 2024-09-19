import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import { HashRouter, Route, Link } from 'react-router-dom';

// Import your Example and States components
import Example from './components/example/Example';
import States from './components/states/States';
import Header from './components/header/Header';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="app-container">
          {/* Creative Toolbar */}
          <div className="toolbar">
            <h1 className="toolbar-title">Group 6 React Router App</h1>
            <nav className="nav-links">
              <Link to="/states" className="nav-button">
                States
              </Link>
              <Link to="/example" className="nav-button">
                Example
              </Link>
            </nav>
          </div>

          {/* Routes */}
          <div className="view-container">
            <Route path="/states" component={States} />
            <Route path="/example" component={Example} />
          </div>
        </div>
      </HashRouter>
    );
  }
}


ReactDOM.render(
<>
<Header />,
<App />,
</>,
 document.getElementById('reactapp')
);