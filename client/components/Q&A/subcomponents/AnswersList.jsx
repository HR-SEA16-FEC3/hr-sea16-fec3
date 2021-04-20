import React from 'react';
import Answer from './Answer';

const AnswersList = (props) => {
  const sortAnswers = (objs) => {
    const answersList = Object.values(objs);
    answersList.sort((a, b) => {
      if (a.answerer_name === 'Seller') {
        return -1;
      }
      if (b.answerer_name === 'Seller') {
        return 1;
      }
      return b.helpfulness - a.helpfulness;
    });
    return answersList;
  };

  const sortedAnswers = sortAnswers(props.list);
  const twoAnswers = sortedAnswers.slice(0, 2);

  return (
    twoAnswers.map((item) => <Answer answer={item} key={item.id} />)
  );
};

export default AnswersList;
