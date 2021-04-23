import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import AnswersList from './AnswersList';

const Question = (props) => {
  const [reported, setReported] = useState(false);
  const [clickedYes, setClickedYes] = useState(false);
  const [helpfulness, setHelpfulness] = useState(props.question.question_helpfulness);

  const handleYesClick = () => {
    if (!clickedYes) {
      axios.put(`/qa/questions/${props.question.question_id}/helpful`)
        .then(() => {
          setHelpfulness(helpfulness + 1);
          setClickedYes(true);
        })
        .catch(() => console.log('Failed to update'));
    }
  };
  const handleReport = () => {
    if (!reported) {
      axios.put(`/qa/answers/${props.question.question_id}/report`)
        .then(() => {
          setReported(true);
        })
        .catch(() => console.log('Failed to update'));
    }
  };

  return (
    <Wrapper>
      {/* Question */}
      <QuestionSection>
        <QAHeader>Q:</QAHeader>
        <QuestionBody>{props.question.question_body}</QuestionBody>
        <QuestionInteractions>
          Helpful?&ensp;
          <HelpfulYes onClick={handleYesClick}>Yes</HelpfulYes>
          &nbsp;(
          <span>{helpfulness}</span>
          )
          &ensp;|&ensp;
          <span>Add an Answer</span>
          &ensp;|&ensp;
          <Report onClick={handleReport} reported={reported}>{reported ? 'Reported' : 'Report'}</Report>
        </QuestionInteractions>
      </QuestionSection>
      {/* Answer List */}
      {(() => {
        if (Object.keys(props.question.answers).length === 0) {
          return (
            <AnswerSection>
              There are no answers to this question currently.
            </AnswerSection>
          );
        }
        return (
          <AnswerSection>
            <QAHeader>A:</QAHeader>
            <AnswersList list={props.question.answers} />
          </AnswerSection>
        );
      })()}
    </Wrapper>
  );
};
const Report = styled.span`
  cursor: pointer;
  color: ${(props) => (props.reported ? 'red' : 'black')};;
`;

const HelpfulYes = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

const Wrapper = styled.div`
padding: 1em;
background: whitesmoke;
flex-direction: column;
margin: 10px;
display: flex;
`;

const QuestionSection = styled.div`
display: flex;
flex-direction: row;
align-items: baseline;
width: 100%;
flex-wrap: nowrap;
margin: 0px;
padding: 0px;
`;

const QuestionBody = styled.p`.
font-weight: bold;
font-size: 16px;
margin: 7px;
`;

const QuestionInteractions = styled.p`
align-self: start;
margin-left: auto;
font-size: 10px
`;

const QAHeader = styled.h3`
font-weight: bold;
font-size: 16px;
margin: 2px;
`;

const AnswerSection = styled.div`
display: flex;
flex-direction: row;
width: 100%;
flex-wrap: wrap;
align-items: baseline;
`;

export default Question;
