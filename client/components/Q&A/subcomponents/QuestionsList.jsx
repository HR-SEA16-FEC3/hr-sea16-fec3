import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Question from './Question';

const QuestionsList = (props) => (
    <Wrapper colorScheme={props.colorScheme} data-testid="QuestionsList">
      {props.questionsList.map((item) => (
        <Question
          question={item}
          key={item.question_id}
          colorScheme={props.colorScheme}
          searchTerm={props.searchTerm}
        />
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
&::-webkit-scrollbar {
  width: auto;
  height: auto;
}
&::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  background-color: ${(props) => (props.colorScheme ? 'lightgrey' : 'darkgrey')};
}
`;

export default QuestionsList;
