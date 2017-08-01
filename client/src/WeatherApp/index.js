import React from 'react';
import Events from './Events';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }
  componentWillMount() {
   axios.get(`http://127.0.0.1:3000/events`)
      .then(res => {
        const arrEvent = res.data;
       this.setState({events:arrEvent});
        console.log(this.state.events[0]);
      });

  }
  
  render() {
    console.log(this.state.events)
    return (
      <div>
        <h1>Our events:</h1>
        <Events events={this.state.events} />
        {/* <Events events={this.state.events} /> */}
      </div>
    );
  }
}

export default App;