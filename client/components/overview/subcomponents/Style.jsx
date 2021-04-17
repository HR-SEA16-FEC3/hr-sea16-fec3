import React from 'react';
import PropTypes from 'prop-types';

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
  })
};

export default Style;
