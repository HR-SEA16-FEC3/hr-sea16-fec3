import React from 'react';
import styled from 'styled-components';
import AnswersList from './AnswersList';

const Question = (props) => (
  <Wrapper>
    {/* Question */}
    <QuestionSection>
      <QAHeader>Q:</QAHeader>
      <QuestionBody>{props.question.question_body}</QuestionBody>
        <QuestionInteractions>
          Helpful?&ensp;Yes (
          <span>{props.question.question_helpfulness}</span>
          )
          &ensp;|&ensp;
          <span>Add Answer</span>
        </QuestionInteractions>
    </QuestionSection>
    {/* Answer List */}
    <AnswerSection>
      <QAHeader>A:</QAHeader>
      <AnswerBody>
        <AnswersList list={props.question.answers} />
        <AnswerButtons>
          <Button>Load more answers</Button>
        </AnswerButtons>
      </AnswerBody>
    </AnswerSection>
  </Wrapper>

);
const Button = styled.button`
  border: 1px solid lightgrey;
  margin-top: 10px;
  margin-right: 10px;
  background: lightgrey;
  padding: 7px;
  font-size: 10px
  text-transform: uppercase;
  &:hover{ background: orange; color: white; border: 1px solid lightgrey }
`;

const Wrapper = styled.div`
padding: 1em;
background: white;
flex-direction: column;
margin: 1em;
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

const AnswerBody = styled.div`
display: flex;
flex-direction: column;
`;

const AnswerButtons = styled.div`
display: flex;
flex-direction: row;
`;

export default Question;
