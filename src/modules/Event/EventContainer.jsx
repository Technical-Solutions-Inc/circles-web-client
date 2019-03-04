import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';

import Event from './Event';

class EventContainer extends PureComponent {
  static propTypes = {

  };

  render(){
    const {  } = this.props;

    return <Event />;
  }
}

const mapState = (state) => ({

});
const mapDispatch = {};

export default connect(mapState, mapDispatch)(EventContainer);
