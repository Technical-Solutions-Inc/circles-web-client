import './EventTile.scss';

import React, { PureComponent, PropTypes } from 'react';

import cxHelpers from 'lib/decorators/classNameHelpers';
import Icon from 'components/Icon';

const imageStyle = (url) =>
  url
    ? {backgroundImage: `url(${url})` }
    : {};

@cxHelpers("EventTile")
class EventTile extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    members: PropTypes.array.isRequired,
    image_url: PropTypes.string
  };

  renderMembers(members) {
    return members.map(member => {
      return <span>O</span>;
    })
  }

  render(){
    const { name, image_url, members, style } = this.props;

    return(
      <div className={this.cx()} style={style}>
        <div className={this.cxEl('background')} style={imageStyle(image_url)}>
          { image_url ? null : <Icon type="image" size="full" />}
        </div>

        <div className={this.cxEl('members')}>
          {this.renderMembers(members)}
        </div>

        <div className={this.cxEl('details')}>
          <div className={this.cxEl('title')}>{name}</div>
        </div>
      </div>
    );
  }
}

export default EventTile;
