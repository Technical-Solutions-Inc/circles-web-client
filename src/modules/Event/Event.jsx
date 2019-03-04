import './Event.scss';

import React, { PureComponent, PropTypes } from 'react';

import cxHelpers from 'lib/decorators/classNameHelpers';

@cxHelpers("Event")
class Event extends PureComponent {
  static propTypes = {

  };

  render(){
    return(
      <div className={this.cx()}>
        <h1>I'm an Event!</h1>
      </div>
    );
  }
}

export default Event;
