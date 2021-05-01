/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import Modal from 'react-modal';
import Highlighter from 'react-highlight-words';
import AnswersList from './AnswersList';
import AddAnAnswerModal from './AddAnAnswerModal';

Modal.setAppElement('body');

const Question = (
  {
    question,
    colorScheme,
    searchTerm,
    productName,
  },
) => {
  const [reported, setReported] = useState(false);
  const [clickedYes, setClickedYes] = useState(false);
  const [helpfulness, setHelpfulness] = useState(question.question_helpfulness);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answersList, setAnswersList] = useState(Object.values(question.answers));

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleYesClick = () => {
    if (!clickedYes && !question.clickedYes) {
      axios.put(`/qa/questions/${question.question_id}/helpful`)
        .then(() => {
          setHelpfulness(helpfulness + 1);
          setClickedYes(true);
          question.question_helpfulness += 1;
          question.clickedYes = true;
        })
        .catch((error) => { throw error; });
    }
  };
  const handleReport = () => {
    if (!reported && !question.reported) {
      axios.put(`/qa/questions/${question.question_id}/report`)
        .then(() => {
          setReported(true);
          question.reported = true;
        })
        .catch((error) => { throw error; });
    }
  };

  const handleAddAnswer = () => {
    axios.get(`qa/questions/${question.question_id}/answers`)
      .then((response) => {
        setAnswersList(response.data.results);
      })
      .catch((error) => { throw error; });
  };

  return (
    <Wrapper colorScheme={colorScheme}>
      {/* Question */}
      <QuestionSection>
        <QAHeader>Q:</QAHeader>
        &ensp;
        <Highlighter
          highlightClassName="highlightedBody"
          searchWords={[searchTerm]}
          autoEscape
          textToHighlight={question.question_body}
        />
        <QuestionInteractions>
          Helpful?&ensp;
          <HelpfulYes onClick={handleYesClick}>Yes</HelpfulYes>
          &nbsp;(
          <span>{helpfulness}</span>
          )
          &ensp;|&ensp;
          <AddAnAnswer onClick={toggleModal}>Add an Answer</AddAnAnswer>
          &ensp;|&ensp;
          <Report colorScheme={colorScheme} onClick={handleReport} reported={reported || question.reported}>{reported || question.reported ? 'Reported' : 'Report'}</Report>
        </QuestionInteractions>
      </QuestionSection>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        style={
          {
            content: {
              width: '60vw',
              height: 'max-content',
              margin: 'auto',
              background: (colorScheme ? '#494949' : 'whitesmoke'),
              color: (colorScheme ? 'whitesmoke' : 'black'),
            },
          }
        }
      >
        <AddAnAnswerModal
          colorScheme={colorScheme}
          toggleModal={toggleModal}
          question={question.question_body}
          questionId={question.question_id}
          handleAddAnswer={handleAddAnswer}
          productName={productName}
        />
      </Modal>
      {/* Answer List */}
      {(() => {
        if (answersList.length === 0) {
          return (
            <AnswerSection>
              There are no answers to this question currently.
            </AnswerSection>
          );
        }
        return (
          <AnswerSection>
            <QAHeader>A:</QAHeader>
            <AnswersList list={answersList} colorScheme={colorScheme} />
          </AnswerSection>
        );
      })()}
    </Wrapper>
  );
};

Question.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  question: PropTypes.object.isRequired,
  colorScheme: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
};

const AddAnAnswer = styled.span`
  cursor: pointer;
`;

// const setReportColor = (props) => {
//   if (props.reported) {
//     return 'red';
//   }
//   if (props.colorScheme) {
//     return 'whitesmoke';
//   }
//   return 'black';
// };
const Report = styled.span`
  cursor: pointer;
  ${(props) => (props.reported ? 'color: red;' : null)}
`;

const HelpfulYes = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

const Wrapper = styled.div`
padding: 1em;
background: ${(props) => (props.colorScheme ? '#494949' : 'whitesmoke')};
color: ${(props) => (props.colorScheme ? 'whitesmoke' : 'black')};
flex-direction: column;
margin: 10px;
display: flex;
`;

const QuestionSection = styled.div`
display: flex;
flex-direction: row;
align-items: baseline;
width: 100%;
flex-wrap: nowrap;
margin: 0px;
padding: 0px;
`;

const QuestionInteractions = styled.p`
align-self: start;
margin-left: auto;
font-size: 10px
`;

const QAHeader = styled.h3`
font-weight: bold;
font-size: 16px;
margin: 2px;
`;

const AnswerSection = styled.div`
display: flex;
flex-direction: row;
width: 100%;
flex-wrap: wrap;
align-items: baseline;
`;

export default Question;
