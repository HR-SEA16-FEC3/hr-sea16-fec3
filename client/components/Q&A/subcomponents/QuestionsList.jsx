import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Question from './Question';

const QuestionsList = (
  {
    questionsList, colorScheme, searchTerm, productName,
  },
) => (
  <Wrapper colorScheme={colorScheme} data-testid="QuestionsList">
    {questionsList.map((item) => (
      <Question
        question={item}
        key={item.question_id}
        colorScheme={colorScheme}
        searchTerm={searchTerm}
        productName={productName}
      />
    ))}
  </Wrapper>
);

QuestionsList.propTypes = {
  questionsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  colorScheme: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
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
