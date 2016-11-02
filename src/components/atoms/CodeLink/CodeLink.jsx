import './CodeLink.scss';

import React, {PureComponent, PropTypes} from 'react';

import cxHelpers from 'lib/decorators/classNameHelpers';

@cxHelpers("CodeLink")
class CodeLink extends PureComponent {
  static propTypes = {
    uri: PropTypes.string.isRequired
  };

  render() {
    return <a target="_window"
              className={this.cx()}
              href={this.props.uri}>
      See the code
      <svg className={this.cxEl('svg')} xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16">
        <path d="M13.66 0l-1.389 1.414 5.487 5.586h-17.276v2h17.275l-5.486 5.586 1.389 1.414 7.857-8-7.857-8z"></path>
      </svg>
    </a>
  }
}

export default CodeLink;
