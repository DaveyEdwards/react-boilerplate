import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import { Link } from 'react-router';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';
import FlatButton from 'material-ui/FlatButton';
import { injectIntl, intlShape } from 'react-intl';

const Header = ({ intl }) => { // eslint-disable-line react/prefer-stateless-function
  const testbutton = intl.formatMessage(messages.home)
  return (
    <div>
      <A href="https://twitter.com/mxstbr">
        <Img src={Banner} alt="react-boilerplate - Logo" />
      </A>
      <NavBar>
        <FlatButton containerElement={<Link to={'/'} />} label={testbutton} />
        <FlatButton containerElement={<Link to={'/Features'} />} label={messages.features.defaultMessage} />
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/features">
          <FormattedMessage {...messages.features} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

Header.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Header);
