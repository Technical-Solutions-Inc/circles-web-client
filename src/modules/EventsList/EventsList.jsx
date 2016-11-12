import './EventsList.scss';

import React, { PureComponent, PropTypes } from 'react';
import { StaggeredMotion, spring } from 'react-motion'

import cxHelpers from 'lib/decorators/classNameHelpers';
import EventTile from 'components/EventTile';

@cxHelpers("EventsList")
class EventsList extends PureComponent {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    events: PropTypes.array
  };

  renderEvents(events) {
    const defaultStyles = events.toJS().map(e => ({s: 0}));
    const styles = (prevInterpolatedStyles) => prevInterpolatedStyles.map((_, i) => {
      return i ===0 ? {s: spring(1)} : {s: spring(prevInterpolatedStyles[i - 1].s)}
    });

    const motionFunc = interpolatingStyles =>
      <div className={this.cx()}>
        {interpolatingStyles.map((style, i) => {
          let {members, image_url, name} = events.get(i);

          return (
            <div key={i}
                 className={this.cxEl('event-tile-container')}
                 style={{transform: `scale(${style.s})`}}>
              <div className={this.cxEl('event-tile-wrapper')}>
                <EventTile {...{members, image_url, name}} />
              </div>
            </div>
          )
        }) }
      </div>;

    return(
      <StaggeredMotion {...{defaultStyles, styles}}>
        {motionFunc}
      </StaggeredMotion>
    )
  }

  render(){
    const { events, isLoading } = this.props;

    return !events || isLoading
      ? <div className={this.cx()}>"Loading..."</div>
      : this.renderEvents(events)
  }
}

export default EventsList;
