import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class addEvent extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      title:"",
      desc: "",
      pic: "",
      user: {_id: 1234}
    }
  }
  handleSubmit(event) {
     event.preventDefault();
    console.log("hi");
    console.log(this.state);
    axios.post(`/create_event/${this.state.user._id}`, {
      title:this.state.title,
      desc: this.state.desc,
      pic:  this.state.pic,
    //   location: {
    //     city:  this.state.location.city,
    //     street:  this.state.location.street ,
    //     num:  this.state.location.num ,
    //   },
    })
      .then(res => {
        const arrEvent = res.data;

      });
  }
 
   

  render() {
    return (
      <div className="container">
        <h2>Add your event!</h2>
        <form action="#" id="getAddEventForm" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="Title">Title :</label>
            <input type="text" className="form-control" id="title" placeholder="Enter Event Title" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})}/>
          </div>
          <div className="form-group">
            <label htmlFor="desc">Enter description of the event:</label>
            <input type="text" className="form-control" id="desc" placeholder="Enter description" value={this.state.desc} onChange={(event) => this.setState({desc: event.target.value})} />
          </div>
          <div className="form-group">
            <label htmlFor="pic">Enter picture url for the event:</label>
            <input type="pic" className="form-control" id="pic" placeholder="Enter picture url" value={this.state.pic} onChange={(event) => this.setState({pic: event.target.value})} />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
}

export default addEvent;