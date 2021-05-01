import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Answer from './Answer';

const sortAndFilterAnswers = (objs) => {
  const answersList = Object.values(objs);
  answersList.sort((a, b) => {
    if (a.answerer_name === 'Seller') {
      return -1;
    }
    if (b.answerer_name === 'Seller') {
      return 1;
    }
    return b.helpfulness - a.helpfulness;
  });
  // Don't think i need to filter, since the response already filters it.
  // .filter(((answer) => answer.reported === false));
  return answersList;
};

const AnswersList = ({ list, colorScheme }) => {
  const [shownAnswers, setShownAnswers] = useState(2);
  const sortedAnswers = sortAndFilterAnswers(list);

  const handleShowMore = () => setShownAnswers(shownAnswers + 2);
  const handleShowLess = () => setShownAnswers(2);
  return (
    <Wrapper>
      {sortedAnswers.slice(0, shownAnswers).map((item) => (
        <Answer
          colorScheme={colorScheme}
          answer={item}
          key={item.id || item.answer_id}
        />
      ))}
      <AnswerButtons>
        {(() => {
          if (sortedAnswers.length > 2
            && shownAnswers < sortedAnswers.length) {
            return (
              <Button
                colorScheme={colorScheme}
                onClick={handleShowMore}
              >
                Load more answers
              </Button>
            );
          }
          return null;
        })()}
        {(() => {
          if (sortedAnswers.length > 2
            && shownAnswers > 2) {
            return (
              <Button
                colorScheme={colorScheme}
                onClick={handleShowLess}
              >
                Collapse Answers
              </Button>
            );
          }
          return null;
        })()}
      </AnswerButtons>
    </Wrapper>
  );
};

AnswersList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  colorScheme: PropTypes.bool.isRequired,
};

const Wrapper = styled.div`
display: flex;
flex-direction: column;
`;
const AnswerButtons = styled.div`
display: flex;
flex-direction: row;
`;
const Button = styled.button`
  border: 0px solid lightgrey;
  margin-top: 10px;
  margin-right: 10px;
  background: ${(props) => (props.colorScheme ? 'purple' : 'orange')};
  padding: 7px;
  font-size: 10px
  text-transform: uppercase;
  color: whitesmoke;
  width: 175px;
  &:hover{ background: ${(props) => (props.colorScheme ? '#a64ca6' : '#ffc04c')}; }
  &:active{ background: ${(props) => (props.colorScheme ? '#660066' : '#cc8400')}; }
`;

export default AnswersList;
