import React from 'react';
import ReactDOM from 'react-dom';
import QandA from '../Q&A';
import { render } from '@testing-library/react';

const { queryByTestId, queryAllByTestId } = render(<QandA />);

test('Q&A component should not crash', () => {
  expect(queryByTestId).toBeTruthy();
});

test('Q&A should render searchbar, questions list and Add Question buttons', () => {
  expect(queryByTestId(/QuestionsList/)).toBeTruthy;
  expect(queryByTestId(/Searchbar/)).toBeTruthy;
  expect(queryByTestId(/AddQeustion/)).toBeTruthy;
});

xtest('Q&A should render "More Answered Questions" if there are more than 4 questions', () => {

});

xtest('Searchbar starts filtering after 3 characters have been added', () => {

  //add a character to the search
  //expect full list
  //add another character
  //expect full list
  //add another character
  //expect list to change

});

xtest('Searcbar filters the data correctly', () => {

});

xtest('Searchbar when cleared shows the full list', () => {

});

xtest('QuestionsList shows max 4 questions by default.', () => {

});

xtest('More Questions show up when there are more than 4 questions and shows all questions when pressed', () => {

});