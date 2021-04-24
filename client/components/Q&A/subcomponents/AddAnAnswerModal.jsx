/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const AddAnAnswerModal = (props) => (
  <Wrapper onSubmit={props.toggleModal}>
    <Title>Submit your Answer</Title>
    <Subtitle>{props.question}</Subtitle>
    <Label htmlFor="youranswer">
      Your Answer*
      <br />
      <BodyInput
        as="textarea"
        id="youranswer"
        required
        type="text"
        placeholder="Enter your answer here"
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
        placeholder="Example: jack@email.com"
      />
      <Disclaimer>For authentication reasons, you will not be emailed</Disclaimer>
    </Label>
    <button type="submit">Submit Answer</button>
  </Wrapper>
);
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

export default AddAnAnswerModal;
