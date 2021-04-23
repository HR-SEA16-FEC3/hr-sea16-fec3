import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Styles';
import styled from 'styled-components';

// pass down setStyle

const StylesList = (props) => {
  const {
    stylesList: {
      product_id: productId,
      results,
    },
  } = props;

  return (
    <div data-testid="StylesList">
      {/* <div>Overview: Style Selector</div> */}
      <span>
        <strong>STYLE &gt;  </strong>
        <StyleName>{results[0].name}</StyleName> {/* DEFAULTS TO 1ST ITEM */}
      </span>
      <div>
        <CircleSpacing>
          {results.map((style) => (
            <Styles style={style} key={style.style_id} /* index={results.indexOf(style)} *//>
          ))}
        </CircleSpacing>
      </div>
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

const CircleSpacing = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 10px 0;
`;

const StyleName = styled.span`
  text-transform: uppercase;
`;

export default StylesList;
