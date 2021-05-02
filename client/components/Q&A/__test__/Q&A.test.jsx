import React from 'react';
import ReactDOM from 'react-dom';
import QandA from '../Q&A';
import { render } from '@testing-library/react';

import questionsExample from './question_example';
import answersExample from './answers_example';

describe ('Q&A Section', () => {
const { queryByTestId, queryAllByTestId } = render(<QandA productId={20100} productName={'Camo Onesie'} colorScheme={false}/>);
it('should not crash', () => {
  expect(queryByTestId).toBeTruthy();
});
it('should render searchbar, questions list and Add Question buttons', () => {
  expect(queryByTestId(/QuestionsList/)).toBeTruthy;
  expect(queryByTestId(/Searchbar/)).toBeTruthy;
  expect(queryByTestId(/AddQeustion/)).toBeTruthy;
});
xit('Q&A should render "More Answered Questions" if there are more than 4 questions', () => {

});
});
xdescribe ('Search Bar', () => {
it('should starts filtering after 3 characters have been added', () => {
  //add a character to the search
  //expect full list
  //add another character
  //expect full list
  //add another character
  //expect list to change
});
it('should filters the data correctly', () => {});
it('should show the full list when cleared', () => {});
});

xdescribe ('Questions List', () => {
it('should render upto 4 questions by default.', () => {});
it('should display More Questions Button when there are more than 4 questions', () => {});
it('should display all Questions when More Questions Button is clicked', () => {});
});

xdescribe ('Question', () => {
  it('should display the Question Body', () => {});
  it('should display up to 2 answers', () => {});
  it('should not display "A:" header and load more answers when there are no answers', () => {});
  it('should not diplay load more answers if there are less than 3 answers', () => {});
  it('should diplay all answers if load more answers button is clicked', () => {});
  it('should send a request when Helpful? Yes is clicked', () => {});
  it('should open a answer modal', () => {})
  it('should send a request when Report is clicked', () => {});
});

xdescribe ('Answers List', () => {
  it('should display upto 2 answers by default', () => {});
  it('should show "show more answers" button if there are more than 2 answers', () => {});
  it('should show all answers when "show more answers" button is clicked', () => {});
});

xdescribe ('Answer', () => {
  it('should display answer body', () => {});
  it('dynamically render username, date and number of helpful? yes', () => {});
  it('should send a request when Helpful? Yes is clicked', () => {});
  it('should send a request when Report is clicked', () => {});
});