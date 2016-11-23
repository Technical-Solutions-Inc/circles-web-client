import './EventsList.scss';

import React, { PureComponent, PropTypes } from 'react';
import { StaggeredMotion, spring } from 'react-motion'

import cxHelpers from 'lib/decorators/classNameHelpers';
import EventTile from 'components/EventTile';

// Set buffer to mitigate jerkiness caused when ReactMotion tries to
// execute while the rest of the javascript is mid-execution.
const BUFFER_DURATION = 500;

@cxHelpers("EventsList")
class EventsList extends PureComponent {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    events: PropTypes.array
  };

  constructor() {
    super();
    this.state = {
      buffering: true
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ buffering: false }), BUFFER_DURATION)
  }

  getStyles = (prevStyles) => prevStyles.map((_, i) => {
    return i ===0 ? {s: spring(1)} : {s: spring(prevStyles[i - 1].s)}
  });

  motionFunc = (events) => (interpolatingStyles) => {
    return <div className={this.cxEl('events')}>
      {interpolatingStyles.map((style, i) => (
        <div key={i}
             className={this.cxEl('event-tile-container')}
             style={{transform: `scale(${style.s})`}}>
          <div className={this.cxEl('event-tile-wrapper')}>
            <EventTile {...events.get(i)} />
          </div>
        </div>
      )) }
    </div>;
  };

  renderEvents(events) {
    const defaultStyles = events.toJS().map(e => ({s: 0}));

    return(
      <StaggeredMotion {...{defaultStyles, styles: this.getStyles}}>
        {this.motionFunc(events)}
      </StaggeredMotion>
    )
  }

  render(){
    const { events, isLoading } = this.props;

    if (!events || isLoading || this.state.buffering) {
      return <div className={this.cx('loading')}>Loading...</div>
    } else {
      return <div className={this.cx()}>
        {this.renderEvents(events)}
      </div>
    }
  }
}

export default EventsList;
