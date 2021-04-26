import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Question from './Question';

const QuestionsList = (props) => (
    <Wrapper data-testid="QuestionsList">
      {props.questionsList.map((item) => (
        <Question question={item} key={item.question_id} />
      ))}
    </Wrapper>
);

QuestionsList.propTypes = {
  questionsList: PropTypes.arrayOf(PropTypes.object),
};
QuestionsList.defaultProps = {
  questionsList: [],
};

const Wrapper = styled.div`
padding: 0em;
max-height: 67vh;
overflow: auto;
`;

export default QuestionsList;
