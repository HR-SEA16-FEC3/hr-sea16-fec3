import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Modal from 'react-modal';
import Highlighter from 'react-highlight-words';
import AnswersList from './AnswersList';
import AddAnAnswerModal from './AddAnAnswerModal';

Modal.setAppElement('body');

const Question = (props) => {
  const [reported, setReported] = useState(false);
  const [clickedYes, setClickedYes] = useState(false);
  const [helpfulness, setHelpfulness] = useState(props.question.question_helpfulness);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answersList, setAnswersList] = useState(props.question.answers);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleYesClick = () => {
    if (!clickedYes) {
      axios.put(`/qa/questions/${props.question.question_id}/helpful`)
        .then(() => {
          setHelpfulness(helpfulness + 1);
          setClickedYes(true);
        })
        .catch((error) => { throw error; });
    }
  };
  const handleReport = () => {
    if (!reported) {
      axios.put(`/qa/questions/${props.question.question_id}/report`)
        .then(() => {
          setReported(true);
        })
        .catch(() => console.log('Failed to update'));
    }
  };

  const handleAddAnswer = () => {
    axios.get(`qa/questions/${props.question.question_id}/answers`)
      .then((response) => {
        setAnswersList(response.data.results);
      })
      .catch((error) => { throw error; });
  };

  return (
    <Wrapper colorScheme={props.colorScheme}>
      {/* Question */}
      <QuestionSection>
        <QAHeader>Q:</QAHeader>
        <Highlighter
          highlightClassName="highlightedBody"
          searchWords={[props.searchTerm]}
          autoEscape
          textToHighlight={props.question.question_body}
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
          <Report colorScheme={props.colorScheme} onClick={handleReport} reported={reported}>{reported ? 'Reported' : 'Report'}</Report>
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
              background: (props.colorScheme ? '#494949' : 'whitesmoke'),
              color: (props.colorScheme ? 'whitesmoke' : 'black'),
            },
          }
        }
      >
        <AddAnAnswerModal
          colorScheme={props.colorScheme}
          toggleModal={toggleModal}
          question={props.question.question_body}
          questionId={props.question.question_id}
          handleAddAnswer={handleAddAnswer}
        />
      </Modal>
      {/* Answer List */}
      {(() => {
        if (Object.keys(props.question.answers).length === 0) {
          return (
            <AnswerSection>
              There are no answers to this question currently.
            </AnswerSection>
          );
        }
        return (
          <AnswerSection>
            <QAHeader>A:</QAHeader>
            <AnswersList list={answersList} colorScheme={props.colorScheme} />
          </AnswerSection>
        );
      })()}
    </Wrapper>
  );
};

const AddAnAnswer = styled.span`
  cursor: pointer;
`;
const Report = styled.span`
  cursor: pointer;
  color: ${(props) => (props.reported ? 'red' : (props.colorScheme ? 'whitesmoke': 'black'))};
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

const QuestionBody = styled.p`.
font-weight: bold;
font-size: 16px;
margin: 7px;
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
