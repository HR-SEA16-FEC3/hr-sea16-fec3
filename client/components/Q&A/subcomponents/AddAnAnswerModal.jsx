/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import modalStyles from '../../../sharedStyles/modalStyles';

const AddAnAnswerModal = (props) => {
  const [answerBody, setAnswerBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/qa/questions/${props.questionId}/answers`,
      {
        body: answerBody,
        name: nickname,
        email,
        photos: [],
      })
      .then(() => props.toggleModal())
      .catch((error) => console.log(error));
  };

  return (
    <modalStyles.Wrapper onSubmit={handleSubmit}>
      <modalStyles.Title>Submit your Answer</modalStyles.Title>
      <modalStyles.Subtitle>{props.question}</modalStyles.Subtitle>
      <modalStyles.Label htmlFor="youranswer">
        {/* Your Answer* */}
        <modalStyles.BodyInput
          as="textarea"
          id="youranswer"
          required
          type="text"
          value={answerBody}
          onChange={(e) => setAnswerBody(e.target.value)}
          placeholder="Enter your answer here"
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
        <br />
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
      <modalStyles.Button type="button">Add Images</modalStyles.Button>
      <modalStyles.Button type="submit">Submit Answer</modalStyles.Button>
    </modalStyles.Wrapper>
  );
};

export default AddAnAnswerModal;
