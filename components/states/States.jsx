// import React, {useState} from 'react';
import React from 'react';
import './States.css';
/**
 * Define States, a React component of Project 4, Problem 2. The model
 * data for this view (the state names) is available at
 * window.models.states.
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    console.log('window.models.states', window.models.states);
    this.state = {
      substring: '',
      allStates: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    // Call the states function to get the array
    const statesData = window.models?.states?.();

    if (statesData && Array.isArray(statesData)) {
      // Set allStates in state if data is available
      this.setState({ allStates: statesData });
    } else {
      console.error("States data not loaded correctly");
    }
  }

  // Method to handle input changes
  handleInputChange(event) {
    this.setState({
      substring: event.target.value,
    });
  }


  render() {


    const { substring, allStates } = this.state;

      // Filter states based on the input substring (ignores case)
      const filteredStates = allStates
        .filter((state) => state.toLowerCase().includes(substring.toLowerCase()))
        .sort();
  

    return (
      <div className="states-container">
        <h1>State Finder</h1>
        
        {/* Input field for substring */}
        <input
          type="text"
          value={substring}
          onChange={this.handleInputChange}
          placeholder="Enter a substring"
          className="state-input"
        />

        {/* Display current substring */}
        <p className="current-substring">
          Substring: <strong>{substring || '(empty)'}</strong>
        </p>

        {/* Display filtered states or no results message */}
        <div className="state-list">
          {filteredStates.length > 0 ? (
            <ul>
              {filteredStates.map((state, index) => (
                <li key={index}>{state}</li>
              ))}
            </ul>
          ) : (
            <p className="no-results">No states match the substring &quot;{substring}&quot;</p>
          )}
        </div>
      </div>

    );
  }
}

export default States;
