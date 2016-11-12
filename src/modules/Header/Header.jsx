import './Header.scss';

import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import cxHelpers from 'lib/decorators/classNameHelpers';
import EventsLabel from 'components/EventsLabel';
import AccountBox from 'components/AccountBox';

@cxHelpers("Header")
class Header extends PureComponent {
  static propTypes = {

  };

  render(){
    const {  } = this.props;

    return(
      <div className={this.cx()}>
        <Link to="/events" className={this.cxEl('events-link')}>
          <EventsLabel />
        </Link>

        <div className={this.cxEl('logo')}>
          CIRCLES
        </div>

        <AccountBox
          className={this.cxEl('account-box')}
          username="Channing" />
      </div>
    );
  }
}

const mapState = (state) => ({

});
const mapDispatch = {};

export default connect(mapState, mapDispatch)(Header);
