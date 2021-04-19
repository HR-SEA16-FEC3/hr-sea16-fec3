import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';

const QuestionsList = (props) => (
  props.questionsList.map((item) => (
    <Question question={item} />
  ))
);

QuestionsList.propTypes = {
  questionsList: PropTypes.arrayOf(PropTypes.object),
};
QuestionsList.defaultProps = {
  questionsList: [],
};

export default QuestionsList;
