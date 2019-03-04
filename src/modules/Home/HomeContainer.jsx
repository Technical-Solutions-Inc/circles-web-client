import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';

import Home from './Home';

class HomeContainer extends PureComponent {
  static propTypes = {

  };

  render(){
    const {  } = this.props;

    return <Home />
  }
}

const mapState = (state) => ({

});
const mapDispatch = {};

export default connect(mapState, mapDispatch)(HomeContainer);
