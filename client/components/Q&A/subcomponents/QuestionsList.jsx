import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Question from './Question';

const QuestionsList = (props) => {
  props.questionsList.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
  props.questionsList.slice(0, 4);

  return (
    <Wrapper data-testid="QuestionsList">
      {props.questionsList.map((item) => (
        <Question question={item} key={item.question_id} />
      ))}
    </Wrapper>
  );
};

QuestionsList.propTypes = {
  questionsList: PropTypes.arrayOf(PropTypes.object),
};
QuestionsList.defaultProps = {
  questionsList: [],
};

const Wrapper = styled.div`
padding: 0em;
`;

export default QuestionsList;
