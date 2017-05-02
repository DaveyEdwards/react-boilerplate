/*
 *
 * ProductPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectProductPage from './selectors';
import messages from './messages';

export class ProductPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="ProductPage"
          meta={[
            { name: 'description', content: 'Description of ProductPage' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

ProductPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ProductPage: makeSelectProductPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
