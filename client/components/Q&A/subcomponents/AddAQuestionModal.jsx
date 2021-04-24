/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
      .then(() => props.toggleModal())
      .catch((error) => console.log(error));
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Title>Ask Your Answer</Title>
      <Subtitle>About the</Subtitle>
      <Label htmlFor="question">
        {/* Your Answer* */}
        <br />
        <BodyInput
          as="textarea"
          id="question"
          required
          type="text"
          value={questionBody}
          onChange={(e) => setQuestionBody(e.target.value)}
          placeholder="Enter your question here"
          maxLength="1000"
        />
      </Label>
      <br />
      <Label htmlFor="nickname">
        What is your nickname?*
        <br />
        <Input
          id="nickname"
          required
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Example: jack543!"
          maxLength="60"
        />
        <br />
        <Disclaimer>For privacy reasons, do not use your full name or email address</Disclaimer>
      </Label>
      <Label htmlFor="email">
        Your email*
        <br />
        <Input
          id="email"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Example: jack@email.com"
        />
        <Disclaimer>For authentication reasons, you will not be emailed</Disclaimer>
      </Label>
      <Button type="submit">Submit Answer</Button>
    </Wrapper>
  );
};

const Label = styled.label`
  margin: 1em 0;
  font-size: 16px;
  display: inline-block;
  margin: .5em 0;
  width: 100%;
`;

const Input = styled.input`
  font-size: 16px;
  width: 100%;
  border: 2px solid #aaa;
  margin: 0 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  cursor: pointer;
  background: whitesmoke;
  height: 30px;

  &:focus {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
  }
`;

const Disclaimer = styled.p`
  color: grey;
  font-size: 12px;
  margin: 1px
`;

const BodyInput = styled(Input)`
  height: 90px;
  font-family: sans-serif;
`;

const Wrapper = styled.form`
  font-family: sans-serif;
  scroll-behavior: smooth;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 24px;
`;

const Subtitle = styled.h3`
  font-weight: bold;
  font-size: 18px;
`;

const Button = styled.button`
  border: 1px solid orange;
  margin-top: 10px;
  margin-right: 10px;
  background: orange;
  padding: 7px;
  font-size: 10px;
  color: white;
  text-transform: uppercase;
  width: 175px;
  &:hover{ background: #ffc457; color: white; }
  &:active{ background: darkorange; color: white; }
`;

export default AddAQuestionModal;
