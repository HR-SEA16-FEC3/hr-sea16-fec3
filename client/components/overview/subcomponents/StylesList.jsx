import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Styles from './Styles';

// pass down setStyle

const StylesList = ({ stylesList, selectedStyle }) => {
  console.log('props:', stylesList);

  return (
    <div data-testid="StylesList">
      {/* STYLE SELECTOR */}
      <span>
        <strong>STYLE &gt;  </strong>
        <StyleName>
          {!stylesList.length ? <div>LOADING</div> : stylesList[0].name}
        </StyleName> {/* DEFAULTS TO 1ST ITEM */}
      </span>
      <div>
        <Circles>
          {!stylesList.length /* WORKS WITHOUT CONDITIONAL */
            ? <div>LOADING</div>
            : stylesList.map((style) => (
              <Styles style={style} key={style.style_id} /* index={results.indexOf(style)} */ />
            ))}
        </Circles>
      </div>
    </div>
  );
};

StylesList.propTypes = {
  // stylesList: PropTypes.arrayOf,
  // selectedStyle: PropTypes.shape,
};

const Circles = styled.span`
  display: flex;
  flex-flow: row wrap;
  margin: 10px 0;
`;

const StyleName = styled.span`
  text-transform: uppercase;
`;

export default StylesList;
