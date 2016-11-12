import './Avatar.scss';

import React, { PureComponent, PropTypes } from 'react';

import cxHelpers from 'lib/decorators/classNameHelpers';
import Icon from 'components/Icon';

@cxHelpers("Avatar")
class Avatar extends PureComponent {
  static propTypes = {
    uri: PropTypes.string
  };

  render(){
    const { uri } = this.props;
    return uri
      ? <img className={this.cx()} src={uri} alt="avatar"/>
      : <Icon className={this.cx()} type="avatar" />;
  }
}

export default Avatar;
