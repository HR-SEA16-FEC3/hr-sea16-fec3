import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Styles from './Styles';
// import { HandIndexFill } from '@styled-icons/bootstrap';

// pass down setStyle

const StylesList = ({ stylesList, displayStyle, setSelectedStyle }) => {
  const temp = null;

  return (
    <div data-testid="StylesList">
      {/* STYLE SELECTOR */}
      <span>
        <strong>STYLE &gt;  </strong>
        <StyleName>
          {!displayStyle ? <span>LOADING</span> : <span>{displayStyle.name}</span>}
        </StyleName> {/* DEFAULTS TO 1ST ITEM */}
      </span>
      <div>
        <Circles>
          {!stylesList.length /* WORKS WITHOUT CONDITIONAL */
            ? <div>LOADING</div>
            : stylesList.map((style) => (
              <Styles style={style} key={style.style_id} setSelectedStyle={setSelectedStyle} />
              /* index={results.indexOf(style)} */
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
