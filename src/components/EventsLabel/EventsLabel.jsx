import './EventsLabel.scss';

import React, { PureComponent, PropTypes } from 'react';

import cxHelpers from 'lib/decorators/classNameHelpers';
import Icon from 'components/Icon';

@cxHelpers("EventsLabel")
class EventsLabel extends PureComponent {
  static propTypes = {

  };

  render(){
    return(
      <div className={this.cx()}>
        <Icon className={this.cxEl('icon')} type="apps" /> Events
      </div>
    );
  }
}

export default EventsLabel;
