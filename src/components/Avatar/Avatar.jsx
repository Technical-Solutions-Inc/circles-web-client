import './Avatar.scss';

import React, { PureComponent, PropTypes } from 'react';

import cxHelpers from 'lib/decorators/classNameHelpers';
import Icon, { ICON_SIZES } from 'components/Icon';

@cxHelpers("Avatar")
class Avatar extends PureComponent {
  static propTypes = {
    uri: PropTypes.string,
    size: PropTypes.oneOf([ICON_SIZES])
  };

  render(){
    const { uri, size } = this.props;
    return uri
      ? <img className={this.cx({ size })} src={uri} alt="avatar"/>
      : <Icon className={this.cx()} size={size} type="avatar" />;
  }
}

export default Avatar;
