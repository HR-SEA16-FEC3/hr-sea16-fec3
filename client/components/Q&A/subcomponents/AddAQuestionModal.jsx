/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';
import modalStyles from '../../../sharedStyles/modalStyles';

const AddAQuestionModal = (props) => {
  const [questionBody, setQuestionBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/qa/questions',
      {
        body: questionBody,
        name: nickname,
        email,
        product_id: props.productId,
      })
      .then(() => {
        props.toggleModal();
        props.handleAddQuestion();
      })
      .catch((error) => console.log(error));
  };

  return (
    <modalStyles.Wrapper onSubmit={handleSubmit}>
      <modalStyles.Title>Ask Your Question</modalStyles.Title>
      <modalStyles.Subtitle>
        About the
        {' '}
        {props.productName}
      </modalStyles.Subtitle>
      <modalStyles.Label htmlFor="question">
        {/* Your Answer* */}
        <modalStyles.BodyInput
          as="textarea"
          id="question"
          required
          type="text"
          value={questionBody}
          onChange={(e) => setQuestionBody(e.target.value)}
          placeholder="Enter your question here"
          maxLength="1000"
        />
      </modalStyles.Label>
      <modalStyles.Label htmlFor="nickname">
        What is your nickname?*
        <modalStyles.Input
          id="nickname"
          required
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Example: jack543!"
          maxLength="60"
        />
        <modalStyles.Disclaimer>
          For privacy reasons, do not use your full name or email address
        </modalStyles.Disclaimer>
      </modalStyles.Label>
      <modalStyles.Label htmlFor="email">
        Your email*
        <modalStyles.Input
          id="email"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Example: jack@email.com"
        />
        <modalStyles.Disclaimer>
          For authentication reasons, you will not be emailed
        </modalStyles.Disclaimer>
      </modalStyles.Label>
      <modalStyles.Button type="submit">Submit Answer</modalStyles.Button>
    </modalStyles.Wrapper>
  );
};

export default AddAQuestionModal;
