import React from 'react';
import Events from './Events';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [{
        id: 1,
        title: "yoga",
        desc: "yoga class and cool other stuff",
        eventPic: "https://cdn.artofliving.org/sites/www.artofliving.org/files/styles/section_page_carousel_image/public/achievement_carousel_image/Yoga---Homepage-02.jpg?itok=EMMz1jwD",
        createdBy: 1
      }, {
        id: 2,
        title: "Shabat Dinner",
        desc: "Shabat Dinner and cool other stuff",
        eventPic: "https://bzbi.org/wp-content/uploads/2016/01/ShabbatEvent.jpg",
        createdBy: 2
      }]
    }
  }
  render() {
    return (
      <div>
        <h1>Our events:</h1>
        <Events events={this.state.events}/>
        {/* <Events events={this.state.events} /> */}
      </div>
    );
  }
}

export default App;