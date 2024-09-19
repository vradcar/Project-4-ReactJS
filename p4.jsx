//import React, { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import States from './components/states/States';
import Header from './components/header/Header';
import Example from './components/example/Example';

  

  class ViewSwitcher extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showStates: true, // Initial state showing States component
      };
    }
  
    toggleView = () => {
      this.setState((prevState) => ({
        showStates: !prevState.showStates, // Toggle between true and false
      }));
    };
  
    render() {
      return (
        <div>
          {/* Toggle Button */}
          <div className="button-container">
            <button onClick={this.toggleView}>
              {this.state.showStates ? 'Switch to Example' : 'Switch to States'}
            </button>
          </div>
          {/* Conditional Rendering based on the state */}
          {this.state.showStates ? <States /> : <Example />}
        </div>
      );
    }
  }


  ReactDOM.render(
    <>
      <Header />
      <ViewSwitcher />
    </>,
    document.getElementById('reactapp')
  );
  