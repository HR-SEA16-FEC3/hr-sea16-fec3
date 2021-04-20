import React from 'react';
import AnswersList from './AnswersList';

const Question = (props) => (
  <div>
    {/* Question */}
    <div>{props.question.question_body}</div>
    <p>
      Helpful?&ensp;Yes (
      <span>{props.question.question_helpfulness}</span>
      )
      &ensp;|&ensp;
      <span>Add Answer</span>
      </p>
    {/* Answer List */}
    <AnswersList list={props.question.answers} />
    <p>Add An Answer</p>
    <p>Load more answers</p>
  </div>

);

export default Question;
