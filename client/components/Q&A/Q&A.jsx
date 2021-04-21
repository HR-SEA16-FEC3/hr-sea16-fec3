import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import QuestionsList from './subcomponents/QuestionsList';
import exampleData from './questions_example.json';
import Searchbar from './subcomponents/Searchbar';

const QandA = () => (
  <Wrapper data-testid="QA">

    <Title>Q &amp; A</Title>

    {/* Search Questions */}
    <Searchbar />
    {/* Questions List */}
    <div>
      <QuestionsList questionsList={exampleData.results} />
      {/* More Answered Questions Button */}
      <Button type="button">MORE ANSWERED QUESTIONS</Button>
      {/* Add a question button */}
      <Button type="button">ADD A QUESTION +</Button>
    </div>

  </Wrapper>
);
const Button = styled.button`
  border: 1px solid black;
  margin-top: 15px;
  margin-right: 15px;
  background: white;
  padding: 15px;
  text-transform: uppercase;
  &:hover{ background: lightgrey }
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
