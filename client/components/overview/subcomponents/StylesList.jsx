import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Styles';
import styled from 'styled-components';

const CircleSpacing = styled.div`
  display: flex;
  margin: 15px 0;
`;

const StylesList = (props) => {
  const {
    stylesList: {
      product_id: productId,
      results,
    },
  } = props;

  return (
    <div data-testid="StylesList">
      <div>Overview: Style Selector</div>
      <p>
        STYLE > {results[0].name} {/* DEFAULTS TO 1ST ITEM */}
      </p>
      <div>
        <CircleSpacing>
          {results.map((style) => (
            <Styles style={style} key={style.style_id} />
          ))}
        </CircleSpacing>
      </div>
      <br />
    </div>
  );
};

StylesList.propTypes = {
  stylesList: PropTypes.shape({
    product_id: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.shape({
      style_id: PropTypes.number,
    })),
  }),
};

export default StylesList;
