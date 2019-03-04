import './PeopleIcon.scss';

import React, { PureComponent, PropTypes } from 'react';

import cxHelpers from 'lib/decorators/classNameHelpers';
import Icon from 'components/Icon';

@cxHelpers("PeopleIcon")
class PeopleIcon extends PureComponent {
  static propTypes = {

  };

  render(){
    return(
      <div className={this.cx()}>
        <Icon type="people" />
      </div>
    );
  }
}

export default PeopleIcon;
