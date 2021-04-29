/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import modalStyles from '../../../sharedStyles/modalStyles';

const AddAnAnswerModal = (props) => {
  const [answerBody, setAnswerBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [file, setFile] = useState('');
  const [imgPreviewUrl, setImgPreviewUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/qa/questions/${props.questionId}/answers`,
      {
        body: answerBody,
        name: nickname,
        email,
        photos: [],
      })
      .then(() => {
        props.toggleModal();
        props.handleAddAnswer();
      })
      .catch((error) => console.log(error));
  };

  const handleImageUpload = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setFile(file);
      setImgPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
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
          colorScheme={props.colorScheme}
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
          colorScheme={props.colorScheme}
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
          colorScheme={props.colorScheme}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Example: jack@email.com"
        />
        <modalStyles.Disclaimer>
          For authentication reasons, you will not be emailed
        </modalStyles.Disclaimer>
      </modalStyles.Label>
      <UploadLabel
        htmlFor="image-upload"
        className="custom-file-upload"
        colorScheme={props.colorScheme}
      >
        Upload Images
      </UploadLabel>
      <Upload
        id="image-upload"
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageUpload}
      />
      {imgPreviewUrl ? <div><UploadImg src={imgPreviewUrl} /></div> : null}
      <modalStyles.Button colorScheme={props.colorScheme} type="submit">Submit Answer</modalStyles.Button>
    </modalStyles.Wrapper>
  );
};

const UploadImg = styled.img`
  height: 80px;
  width: auto;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const Upload = styled.input`
  display: none;
`;

const UploadLabel = styled.label`
  border: 0px solid;
  margin-top: 10px;
  margin-right: 10px;
  background: ${(props) => (props.colorScheme ? 'purple' : 'orange')};
  padding: 7px;
  font-size: 10px;
  display: block;
  text-align: center;
  color: white;
  text-transform: uppercase;
  width: 159px;
  &:hover{ background: ${(props) => (props.colorScheme ? '#a64ca6' : '#ffc04c')}; }
  &:active{ background: ${(props) => (props.colorScheme ? '#660066' : '#cc8400')}; }
`;

export default AddAnAnswerModal;
