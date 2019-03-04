import './AccountBox.scss';

import React, { PureComponent, PropTypes } from 'react';

import cxHelpers from 'lib/decorators/classNameHelpers';
import Avatar from 'components/Avatar';

const MENU_SPAN_MODS = ['one', 'two', 'three'];

@cxHelpers("AccountBox")
class AccountBox extends PureComponent {
  constructor() {
    super()
    this.state = {
      expanded: false
    }
  }
  static propTypes = {
    username: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    expanded: PropTypes.bool.isRequired,
    avatarURI: PropTypes.string
  };

  handleClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render(){
    const { username, avatarURI } = this.props;
    const { expanded } = this.state;

    return(
      <div className={this.cx({ expanded })}>
        <a className={this.cxEl('header', { expanded })} onClick={this.handleClick}>
          <Avatar className={this.cxEl('avatar')} uri={avatarURI} />

          <span className={this.cxEl('name')}>{username}</span>

          <div className={this.cxEl('menu-icon', { expanded })}>
            {MENU_SPAN_MODS.map((m, i) =>
              <span key={i} className={this.cxEl('menu-icon-bar', {[m]: true})} />
            )}
          </div>
        </a>

        <div className={this.cxEl('menu', { expanded })}>
          <div className={this.cxEl('menu-item')}>
            Account
          </div>
          <div className={this.cxEl('menu-item')}>
            Friends
          </div>
          <div className={this.cxEl('menu-item')}>
            Sign Out
          </div>
        </div>
      </div>
    );
  }
}

export default AccountBox;
