import React from 'react';
import PropTypes from 'prop-types';

// each product_id will have several sub style_id's
// will need to render styles separately
// can rename this to StylesList
// then map out and render each style separately (based on selected style)

const Style = (props) => {
  const {
    stylesList: {
      product_id: id,
    },
  } = props;

  return (

    <div data-testid="Style">
      <div>Overview: Style Selector</div>
      {id}
      <br />
    </div>

  );
};

Style.propTypes = {
  stylesList: PropTypes.shape({
    product_id: PropTypes.string.isRequired,
  }),
};

export default Style;
