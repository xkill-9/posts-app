import React, { Component, PropTypes } from 'react';

const propTypes = {
  children: PropTypes.element,
};

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
