import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import QuestionsList from './subcomponents/QuestionsList';
import exampleData from './questions_example.json';
import Searchbar from './subcomponents/Searchbar';

const QandA = (props) => {
  const [questionsList, setQuestionsList] = useState([]);
  useEffect(() => {
    //TODO add a http request to get the live data
    setQuestionsList(exampleData.results);
  });

  return (
    <Wrapper data-testid="QA">

      <Title>Q &amp; A</Title>

      {/* Search Questions */}
      <Searchbar />
      {/* Questions List */}
      <div>
        <QuestionsList questionsList={questionsList} />
        {/* More Answered Questions Button */}
        <Button type="button" data-testid="MoreQuestion">MORE ANSWERED QUESTIONS</Button>
        {/* Add a question button */}
        <Button type="button" data-testid="AddQuestion">ADD A QUESTION +</Button>
      </div>
    </Wrapper>
  );
};
const Button = styled.button`
  border: 0px solid lightgray;
  margin-top: 15px;
  margin-right: 15px;
  background: orange;
  color: white;
  padding: 15px;
  text-transform: uppercase;
  &:hover{ background: white; color: black; }
`;

const Wrapper = styled.section`
padding: 1em;
background: #e6e6e6;
font-family: sans-serif;
`;

const Title = styled.h1`
  font-size: 22px;
`;

export default QandA;
