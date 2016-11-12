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
      
      </div>
    );
  }
}

export default Event;
