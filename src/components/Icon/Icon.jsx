import './Icon.scss';

import React, { PureComponent, PropTypes } from 'react';

import cxHelpers from 'lib/decorators/classNameHelpers';

const ICON_TYPE_MAP = {
  'apps': require('react-icons/lib/md/apps'),
  'avatar': require('react-icons/lib/md/account-circle'),
  'arrow-drop-down': require('react-icons/lib/md/arrow-drop-down'),
  'arrow-drop-up': require('react-icons/lib/md/arrow-drop-up'),
  'arrow-forward': require('react-icons/lib/md/arrow-forward'),
  'arrow-downward': require('react-icons/lib/md/arrow-downward'),
  'arrow-back': require('react-icons/lib/md/arrow-back'),
  'arrow-upward': require('react-icons/lib/md/arrow-upward'),
  'image': require('react-icons/lib/md/image'),
  'people': require('react-icons/lib/md/people'),
};

const ICON_TYPES = Object.keys(ICON_TYPE_MAP);
export const ICON_SIZES = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl'
];
const DEFAULT_ICON_SIZE = ICON_SIZES[2];

@cxHelpers("Icon")
class Icon extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(ICON_TYPES).isRequired,
    size: PropTypes.oneOf(ICON_SIZES)
  };

  static defaultProps = {
    size: DEFAULT_ICON_SIZE
  };

  render(){
    const { type, size } = this.props;
    const Icon = ICON_TYPE_MAP[type];

    return React.createElement(Icon, { className: this.cx(size) });
  }
}

export default Icon;
