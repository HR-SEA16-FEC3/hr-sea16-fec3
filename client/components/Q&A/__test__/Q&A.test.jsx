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