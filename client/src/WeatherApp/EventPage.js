import React from 'react';

// const EventPage = ({ match }) => (
//   <div>
//     <h3>topicId Param: {match.params.eventid}</h3>
//     <h4>Path: {match.path}</h4>
//     <h4>URL: {match.url}</h4>
//     <h4>isExact: {`${match.isExact}`}</h4>
//   </div>)

class EventPage extends React.Component {
    constructor(props) {
        super(props)
    }


    ///here we choose how our event page would look like

    render() {
        return (
            <div className="container">
                <div className="row">
                    And the event id is - {this.props.match.params.eventid}
                </div>
            </div>
        );
    }
}
export default EventPage;