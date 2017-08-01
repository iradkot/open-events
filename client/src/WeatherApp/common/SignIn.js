import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>yo {this.props.redirect} </h1>
      </div>
    );
  }
}

export default App;