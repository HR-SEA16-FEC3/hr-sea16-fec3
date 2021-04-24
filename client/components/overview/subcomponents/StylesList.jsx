import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Styles from './Styles';

// pass down setStyle

const StylesList = ({ stylesList, selectedStyle }) => {
  console.log('props:', stylesList);

  return (
    <div data-testid="StylesList">
      {/* <div>Overview: Style Selector</div> */}
      <span>
        <strong>STYLE &gt;  </strong>
        <StyleName>
          {!stylesList.length ? <div>LOADING</div> : stylesList[0].name}
        </StyleName> {/* DEFAULTS TO 1ST ITEM */}
      </span>
      <div>
        <CircleSpacing>
          {!stylesList.length
            ? <div>LOADING</div>
            : stylesList.map((style) => (
              <Styles style={style} key={style.style_id} /* index={results.indexOf(style)} */ />
            ))
          }
        </CircleSpacing>
      </div>
    </div>
  );
};

// StylesList.propTypes = {
//   stylesList: PropTypes.shape([
//     results: PropTypes.arrayOf(PropTypes.shape({
//       style_id: PropTypes.number,
//     })),
//   ]),
// };

/* INSIDE CIRCLESPACING
  {results.map((style) => (
    <Styles style={style} key={style.style_id} /* index={results.indexOf(style)} *\//>
  ))}
*/

const CircleSpacing = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 10px 0;
`;

const StyleName = styled.span`
  text-transform: uppercase;
`;

export default StylesList;
