import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';

import cxHelpers from 'lib/decorators/classNameHelpers';

@cxHelpers("EventContainer")

class EventContainer extends PureComponent {
  static propTypes = {

  };

  render(){
    const {  } = this.props;

    return(
      <div className={this.cx()}>

      </div>
    );
  }
}

const mapState = (state) => ({

});
const mapDispatch = {};

export default connect(mapState, mapDispatch)(EventContainer);
