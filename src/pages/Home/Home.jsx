import './Home.scss';

import React, { PropTypes, PureComponent } from 'react';

import cxHelpers from 'lib/decorators/classNameHelpers';
import { getToday } from 'lib/util/dateTime';
import { firstNameLastLetter } from 'lib/util/formatting';
import { ping } from 'lib/util/api';
import Header from 'components/organisms/Header';
import Section from 'components/organisms/Section';
import CodeLink from 'components/atoms/CodeLink';

const REPO_URI = "https://github.com/Technical-Solutions-Inc/circles-web-client.git";

const NAMES = ["Bryan"];

const FORMATTED_NAMES = NAMES.map(name => firstNameLastLetter(name));

@cxHelpers("Home")
class Home extends PureComponent {
  handlePing = () => {
    console.log('Pinging...');
    ping().then(res => alert(`Ping response: ${res.statusText}`));
  };

  render() {
    return (
      <div className={this.cx()}>
        <CodeLink className={this.cxEl('code-link')} uri={REPO_URI} />
        <Header names={FORMATTED_NAMES} day={getToday()} />
        <a className={this.cxEl('ping-btn', '', 'button')} onClick={this.handlePing}>
          Ping...
        </a>
        <Section title="About This Repo">
          <p>
            This repo marks the advent of Bryan O'Rourke and Channing Allen's first foray into <em>actually</em> building an application geared towards making events with the people you love more manageable.
          </p>
          <p>
            The story of how this started is quirkier than you might guess. Lipsum dolor wow fantastic wheeee!!!!!
          </p>
        </Section>
      </div>
    );
  }
}

export default Home;
