import './EventTile.scss';

import React, { PureComponent, PropTypes } from 'react';
import { Link } from 'react-router';

import cxHelpers from 'lib/decorators/classNameHelpers';
import clamp from 'lib/util/line-clamp';

import Icon from 'components/Icon';
import PeopleIcon from 'components/PeopleIcon';
import Avatar from 'components/Avatar';

const imageStyle = (url) =>
  url
    ? {backgroundImage: `url(${url})` }
    : {};

@cxHelpers("EventTile")
class EventTile extends PureComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    members: PropTypes.array.isRequired,
    image_url: PropTypes.string
  };

  componentDidMount() {
    clamp(this.title, {
      clamp: 2,
      truncationChar: "&nbsp;...",
      splitOnChars: [' ']
    })
  }


  getAvatars(users) {
    return users.map(({ profile_image }) =>
      <div className={this.cxEl('member')}>
        <Avatar
          size="lg"
          uri={profile_image} />
      </div>
    )
  }

  renderMembers(members) {
    console.log({members})
    if (members.length > 6) {
      const avatars = this.getAvatars(members.slice(0, 5));
      avatars.push(<div className={this.cxEl('member')}><PeopleIcon /></div>);
      return avatars
    } else {
      return this.getAvatars(members)
    }
  }

  render(){
    const { name, image_url, members, style, id } = this.props;

    return(
      <div className={this.cx()} style={style}>
        <Link to={`/events/${id}`}>
          <div
            className={this.cxEl('background')}
            style={imageStyle(image_url)}>
            { image_url ? null : <Icon type="image" size="full" />}
          </div>

          <div className={this.cxEl('members')}>
            {this.renderMembers(members)}
          </div>

          <div className={this.cxEl('details')}>
            <div
              className={this.cxEl('title')}
              ref={(el) => this.title = el}>
              {name}
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default EventTile;
