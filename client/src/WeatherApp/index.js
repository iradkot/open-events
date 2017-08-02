import React from 'react';
import Events from './Events';
import axios from 'axios';
import { Link } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }
  componentWillMount() {
   axios.get(`/events`)
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
        <h1>Our events:
          <button type="button" className="btn btn-default"><Link to="/addEvent">Add event</Link></button>
        </h1>
        <Events events={this.state.events} />
        {/* <Events events={this.state.events} /> */}
      </div>
    );
  }
}

export default App;