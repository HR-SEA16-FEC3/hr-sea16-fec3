import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';

const QuestionsList = (props) => {
  props.questionsList.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
  props.questionsList.slice(0, 4);

  return (
    props.questionsList.map((item) => (
      <Question question={item} key={item.question_id} />
    ))
  );
};

QuestionsList.propTypes = {
  questionsList: PropTypes.arrayOf(PropTypes.object),
};
QuestionsList.defaultProps = {
  questionsList: [],
};

export default QuestionsList;
