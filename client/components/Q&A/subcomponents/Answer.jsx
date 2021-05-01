/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';

import AnswerImage from './AnswerImage';

const Answer = ({ answer, colorScheme }) => {
  const date = new Date(answer.date);
  const mNames = ['January', 'February', 'March',
    'April', 'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'];
  const [reported, setReported] = useState(false);
  const [clickedYes, setClickedYes] = useState(false);
  const [helpfulness, setHelpfulness] = useState(answer.helpfulness);
  const handleYesClick = () => {
    if (!clickedYes && !answer.clickedYes) {
      axios.put(`/qa/answers/${answer.id || answer.answer_id}/helpful`)
        .then(() => {
          setHelpfulness(helpfulness + 1);
          setClickedYes(true);
          answer.helpfulness += 1;
          answer.clickedYes = true;
        })
        .catch((error) => { throw error; });
    }
  };

  const handleReport = () => {
    if (!reported && !answer.reported) {
      axios.put(`/qa/answers/${answer.id || answer.answer_id}/report`)
        .then(() => {
          setReported(true);
          answer.reported = true;
        })
        .catch((error) => { throw error; });
    }
  };

  const formattedDate = `${mNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  return (
    <Wrapper>
      <AnswerBody data-testid="AnswerBody">{answer.body}</AnswerBody>
      {answer.photos.length > 0
        ? (
          <ImagesDiv>
            {answer.photos.map(
              (img) => (<AnswerImage url={img.url || img} key={img.url || img} />),
            )}
          </ImagesDiv>
        )
        : null}
      <AnswerInteraction>
        by&nbsp;
        <span>{answer.answerer_name}</span>
        ,&nbsp;
        {formattedDate}
        &ensp;|&ensp;
        Helpful?&ensp;
        <HelpfulYes onClick={handleYesClick}>Yes</HelpfulYes>
        &nbsp;(
        <span>{helpfulness}</span>
        )&ensp;|&ensp;
        <Report
          colorScheme={colorScheme}
          onClick={handleReport}
          reported={reported || answer.reported}
        >
          {reported || answer.reported ? 'Reported' : 'Report'}
        </Report>
      </AnswerInteraction>

    </Wrapper>
  );
};

Answer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  answer: PropTypes.object.isRequired,
  colorScheme: PropTypes.bool.isRequired,
};

const HelpfulYes = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;
const Report = styled.span`
  cursor: pointer;
  ${(props) => (props.reported ? 'color: red;' : null)}
`;

const AnswerInteraction = styled.p`
font-size:12px;
margin: 5px 0%;
`;

const AnswerBody = styled.p`
font-size: 14px;
margin: 7px 0%;
`;
const Wrapper = styled.div`
margin: 5px 10px;
`;

const ImagesDiv = styled.div`
display: flex;
flex-direction: row;
`;
export default Answer;
