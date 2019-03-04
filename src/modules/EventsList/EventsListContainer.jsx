import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';

import { fetchEvents, getEvents, getEventsLoading } from 'lib/redux/events';
import EventsList from './EventsList';

// To avoid rendering hell
const EVENT_BATCH_SIZE = 20;

class EventsListContainer extends PureComponent {
  static propTypes = {
    fetchEvents: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    events: PropTypes.array
  };

  componentDidMount() {
    this.props.fetchEvents()
  }

  render(){
    const { events, isLoading } = this.props;
    const shownEvents = events && events.slice(0, EVENT_BATCH_SIZE);

    return <EventsList {...{events: shownEvents, isLoading}} />;
  }
}

const mapState = (state) => ({
  events: getEvents(state),
  isLoading: getEventsLoading(state)
});
const mapDispatch = { fetchEvents };

export default connect(mapState, mapDispatch)(EventsListContainer);
