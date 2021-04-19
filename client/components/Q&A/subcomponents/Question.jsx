import React from 'react';
import AnswersList from './AnswersList'

const Question = (props) => (
  <div>
    {/* Question */}
    <div>{props.question.question_body}</div>

    {/* Answer List */}
    <p>Helpful?</p>
    <p>
      Yes (
      {props.question.question_helpfulness}
      )
    </p>
    <p>Add An Answer</p>
    <p>Load more answers</p>
  </div>

);

export default Question;
