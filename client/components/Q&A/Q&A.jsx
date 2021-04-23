import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import QuestionsList from './subcomponents/QuestionsList';
import exampleData from './questions_example.json';
import Searchbar from './subcomponents/Searchbar';

const QandA = (props) => {
  const [questionsList, setQuestionsList] = useState([]);
  const [shownQuestions, setShownQuestions] = useState(4);

  const handleShowMore = () => setShownQuestions(shownQuestions + 2);
  const handleShowLess = () => setShownQuestions(4);

  useEffect(async () => {
    // TODO add a http request to get the live data
    await setQuestionsList(exampleData.results);
    await sortQuestionsList(questionsList);
  });

  const currentList = questionsList.slice(0, shownQuestions);

  return (
    <Wrapper data-testid="QA">

      <Title>Q &amp; A</Title>

      {/* Search Questions */}
      {questionsList.length > 0 ? <Searchbar /> : null}
      {/* Questions List */}
      <div>
        <QuestionsList questionsList={currentList} />
        {/* More Answered Questions Button */}
        {(() => {
          if (questionsList.length > 4 && shownQuestions <= questionsList.length) {
            return (
              <Button type="button" data-testid="MoreQuestion" onClick={handleShowMore}>MORE ANSWERED QUESTIONS</Button>
            );
          }
          return null;
        })()}
        {(() => {
          if (shownQuestions > 4) {
            return (
              <Button type="button" data-testid="MoreQuestion" onClick={handleShowLess}>SHOW LESS QUESTIONS</Button>
            );
          }
          return null;
        })()}
        {/* Add a question button */}
        <Button type="button" data-testid="AddQuestion">ADD A QUESTION +</Button>
      </div>
    </Wrapper>
  );
};

const sortQuestionsList = (list) => {
  list.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
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
