import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import QuestionsList from './subcomponents/QuestionsList';
import exampleData from './questions_example.json';

const QandA = () => (

  <div data-testid="QA">

    {/* Search Questions */}
    <div className="search-bar">
      <FontAwesomeIcon icon={faSearch} />
      <input data-testid="search" type="search" id="question-search" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
      <button type="submit">Search</button>
    </div>
    {/* Questions List */}
    <div>
      <QuestionsList questionsList={exampleData.results} />
      {/* More Answered Questions Button */}
      <button type="button">MORE ANSWERED QUESTIONS</button>
      {/* Add a question button */}
      <button type="button">ADD A QUESTION +</button>
    </div>

  </div>
);

export default QandA;
