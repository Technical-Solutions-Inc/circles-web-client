import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';

import cxHelpers from 'lib/decorators/classNameHelpers';
import { fetchEvents, getEvents, getEventsLoading } from 'lib/redux/events';
import EventsList from './EventsList';

@cxHelpers("EventsListContainer")

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
    return <EventsList {...{events, isLoading}} />;
  }
}

const mapState = (state) => ({
  events: getEvents(state),
  isLoading: getEventsLoading(state)
});
const mapDispatch = { fetchEvents };

export default connect(mapState, mapDispatch)(EventsListContainer);
