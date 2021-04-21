import React from 'react';
import styled from 'styled-components';

const Answer = (props) => {
  const date = new Date(props.answer.date);
  const mNames = ['January', 'February', 'March',
    'April', 'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'];

  const formattedDate = `${mNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  return (
    <Wrapper>
      <AnswerBody>{props.answer.body}</AnswerBody>
      <AnswerInteraction>
        by
        {' '}
        <span>{props.answer.answerer_name}</span>
        ,
        {' '}
        {formattedDate}
        &ensp;|&ensp;
        Helpful?&ensp;Yes (
        <span>{props.answer.helpfulness}</span>
        )
        &ensp;|&ensp;
        <span>Report</span>
      </AnswerInteraction>

    </Wrapper>
  );
};

const AnswerInteraction = styled.p`
font-size:12px;
margin: 5px 0%;
`;

const AnswerBody = styled.p`
font-size: 14px;
margin: 7px 0%;
`;
const Wrapper = styled.div`
margin: 1em 7px;
`;

export default Answer;
