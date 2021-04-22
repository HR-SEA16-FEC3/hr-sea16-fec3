import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Answer = (props) => {
  const date = new Date(props.answer.date);
  const mNames = ['January', 'February', 'March',
    'April', 'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'];
  const [reported, setReported] = useState(false);
  const [clickedYes, setClickedYes] = useState(false);
  const [helpfulness, setHelpfulness] = useState(props.answer.helpfulness);
  const handleYesClick = () => {
    if (!clickedYes) {
      axios.put(`/qa/answers/${props.answer.id}/helpful`)
        .then(() => {
          setHelpfulness(helpfulness + 1);
          setClickedYes(true);
        })
        .catch(() => console.log('Failed to update'));
    }
  };

  const handleReport = () => {
    if (!reported) {
      axios.put(`/qa/answers/${props.answer.id}/report`)
        .then(() => {
          setReported(true);
        })
        .catch(() => console.log('Failed to update'));
    }
  };

  const formattedDate = `${mNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  return (
    <Wrapper>
      <AnswerBody data-testid="AnswerBody">{props.answer.body}</AnswerBody>
      <AnswerInteraction>
        by
        {' '}
        <span>{props.answer.answerer_name}</span>
        ,
        {' '}
        {formattedDate}
        &ensp;|&ensp;
        Helpful?&ensp;
        <HelpfulYes onClick={handleYesClick}>Yes</HelpfulYes>
        &nbsp;(
        <span>{helpfulness}</span>
        )
        &ensp;|&ensp;
        <Report onClick={handleReport} reported={reported}>Report</Report>
      </AnswerInteraction>

    </Wrapper>
  );
};
const HelpfulYes = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;
const Report = styled.span`
  cursor: pointer;
  color: ${(props) => (props.reported ? 'red' : 'black')};;
`;

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
