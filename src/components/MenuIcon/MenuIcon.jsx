import './MenuIcon.scss';

import React, { PureComponent, PropTypes } from 'react';

import cxHelpers from 'lib/decorators/classNameHelpers';

@cxHelpers("MenuIcon")
class MenuIcon extends PureComponent {
  static propTypes = {
    open: PropTypes.bool
  };

  render(){
    return(
      <div className={this.cx({'open': this.props.open})}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }
}

export default MenuIcon;
