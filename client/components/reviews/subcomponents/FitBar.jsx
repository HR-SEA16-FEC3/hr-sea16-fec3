import React from 'react';
import styled from 'styled-components';

const FitBar = ({ data, value }) => {
  let meaningLow;
  let meaningHigh;
  const position = data.value * 10;

  const emptyBar = {
    width: '100%',
    height: 20,
    backgroundColor: '#e0e0de',
    borderRadius: 25,
    margin: 4,
  };

  const innerBar = {
    display: 'inline-block',
    width: `${position}%`,
    height: '100%',

  };

  switch (value) {
    case 'Size':
      meaningLow = 'Too small';
      meaningHigh = 'Too large';
      break;
    case 'Width':
      meaningLow = 'Too narrow';
      meaningHigh = 'Too wide';
      break;
    case 'Comfort':
      meaningLow = 'Uncomfortable';
      meaningHigh = 'Perfect';
      break;
    case 'Quality':
      meaningLow = 'Poor';
      meaningHigh = 'Perfect';
      break;
    case 'Length':
      meaningLow = 'Runs short';
      meaningHigh = 'Runs long';
      break;
    case 'Fit':
      meaningLow = 'Runs tight';
      meaningHigh = 'Runs loose';
      break;
    default:
      break;
  }

  return (
    <div className="characteristic-bar">
      <div id="char-empty-bar" style={emptyBar}>
        <div style={innerBar} />
        <span id="rating-pointer">&#9650;</span>
      </div>
      <TextWrapper>
        <Text className="charMeaning">
          {meaningLow}
        </Text>
        <Text>
          {meaningHigh}
        </Text>
      </TextWrapper>
    </div>
  );
};

const TextWrapper = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;

`;

const Text = styled.div`
  font-size: 12px;
  `;

export default FitBar;
