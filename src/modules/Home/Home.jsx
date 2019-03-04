import './Home.scss';

import React, { PureComponent, PropTypes } from 'react';
import { Link } from 'react-router';

import cxHelpers from 'lib/decorators/classNameHelpers';
import EventsLabel from 'components/EventsLabel';
import Icon from 'components/Icon';

@cxHelpers("Home")
class Home extends PureComponent {
  static propTypes = {

  };

  render(){
    return(
      <div className={this.cx()}>
        <h1 className={this.cxEl('banner')}>Welcome Home</h1>
        <Link className={this.cxEl('events-btn', {}, 'button')} to="/events">
          <EventsLabel /> <Icon type="arrow-forward"/>
        </Link>
      </div>
    );
  }
}

export default Home;
