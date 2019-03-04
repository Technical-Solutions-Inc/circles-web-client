import './AppRoot.scss';

import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';

import cxHelpers from 'lib/decorators/classNameHelpers';
import Header from 'modules/Header';

@cxHelpers("AppRoot")
class AppRoot extends PureComponent {
  static propTypes = {

  };

  render(){
    const { children } = this.props;

    return(
      <div className={this.cx()}>
        <Header />
        <div className={this.cxEl('content')}>{children}</div>
      </div>
    );
  }
}

const mapState = (state) => ({

});
const mapDispatch = {};

export default connect(mapState, mapDispatch)(AppRoot);
