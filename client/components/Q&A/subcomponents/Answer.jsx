import React from 'react';

const Answer = (props) => {
  const date = new Date(props.answer.date);
  const mNames = ['January', 'February', 'March',
    'April', 'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'];

  const formattedDate = `${mNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  return (
    <div>
      <p>{props.answer.body}</p>
      <p>
        by
        {' '}
        <span>{props.answer.answerer_name}</span>
        ,
        {' '}
        {formattedDate}
        &ensp;|&ensp;
        Helpful?
        {' '}
        Yes (
        <span>{props.answer.helpfulness}</span>
        )
        &ensp;|&ensp;
        <span>Report</span>
      </p>

    </div>
  );
}

export default Answer;
