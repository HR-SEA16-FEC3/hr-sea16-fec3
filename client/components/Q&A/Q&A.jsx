import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import QuestionsList from './subcomponents/QuestionsList';
// import exampleData from './questions_example.json';
import Searchbar from './subcomponents/Searchbar';

const QandA = ({ productId }) => {
  const [questionsList, setQuestionsList] = useState([]);
  const [shownQuestions, setShownQuestions] = useState(2);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredList, setFilteredList] = useState([]);

  const handleShowMore = () => setShownQuestions(shownQuestions + 2);
  const handleShowLess = () => setShownQuestions(2);

  useEffect(() => {
    // TODO add a http request to get the live data
    axios.get(`/qa/questions/${productId}`)
      .then((data) => (
        setQuestionsList(sortQuestionsList(data.data.results))
      ))
      .catch((error) => {
        throw error;
      });
  }, [productId]);

  useEffect(() => setFilteredList(questionsList), [questionsList]);

  useEffect(() => {
    if (searchTerm.length > 2 || searchTerm === '') {
      setFilteredList(questionsList.filter((item) => (
        item.question_body.toUpperCase().includes(searchTerm.toUpperCase())
      )));
    }
  }, [searchTerm]);

  const currentList = filteredList.slice(0, shownQuestions);

  return (
    <Wrapper data-testid="QA">

      <Title>Q &amp; A</Title>

      {/* Search Questions */}
      {questionsList.length > 0
        ? <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> : null}
      {/* Questions List */}
      <div>
        <QuestionsList questionsList={currentList} />
        {/* More Answered Questions Button */}
        {(() => {
          if (filteredList.length > 2 && shownQuestions <= filteredList.length) {
            return (
              <Button type="button" data-testid="MoreQuestion" onClick={handleShowMore}>MORE ANSWERED QUESTIONS</Button>
            );
          }
          return null;
        })()}
        {(() => {
          if (shownQuestions > 2 && currentList.length > 2) {
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
  const newList = list.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
  return newList;
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
max-height: 100vh;
`;

const Title = styled.h1`
  font-size: 22px;
`;

export default QandA;
