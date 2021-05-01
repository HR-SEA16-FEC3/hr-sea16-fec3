import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import Modal from 'react-modal';
import QuestionsList from './subcomponents/QuestionsList';
import Searchbar from './subcomponents/Searchbar';
import AddAQuestionModal from './subcomponents/AddAQuestionModal';

const QandA = ({ productId, productName, colorScheme }) => {
  const [questionsList, setQuestionsList] = useState([]);
  const [shownQuestions, setShownQuestions] = useState(2);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const handleShowMore = () => setShownQuestions(shownQuestions + 2);
  const handleShowLess = () => setShownQuestions(2);
  // Initialize questions list
  const sortQuestionsList = (list) => {
    const newList = list.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
    return newList;
  };

  useEffect(() => {
    axios.get(`/qa/questions/${productId}`)
      .then((data) => (
        setQuestionsList(sortQuestionsList(data.data.results))
      ))
      .catch((error) => {
        throw error;
      });
  }, [productId]);

  // Initialize filtered list
  useEffect(() => setFilteredList(questionsList), [questionsList]);

  // changes filtered list as searchterm changes
  useEffect(() => {
    if (searchTerm.length > 2 || searchTerm === '') {
      setFilteredList(questionsList.filter((item) => (
        item.question_body.toUpperCase().includes(searchTerm.toUpperCase())
      )));
    }
  }, [searchTerm]);

  const currentList = filteredList.slice(0, shownQuestions);

  const handleAddQuestion = () => {
    axios.get(`/qa/questions/${productId}`)
      .then((data) => (
        setQuestionsList(sortQuestionsList(data.data.results))
      ))
      .catch((error) => {
        throw error;
      });
  };

  return (
    <Wrapper
      data-testid="QA"
      colorScheme={colorScheme}
    >

      <Title colorScheme={colorScheme}>Q &amp; A</Title>

      {/* Search Questions */}
      {questionsList.length > 0
        ? (
          <Searchbar
            colorScheme={colorScheme}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        ) : null}
      {/* Questions List */}
      <div>
        <QuestionsList
          questionsList={currentList}
          colorScheme={colorScheme}
          searchTerm={searchTerm}
          productName={productName}
        />
        {/* More Answered Questions Button */}
        {(() => {
          if (filteredList.length > 2 && shownQuestions <= filteredList.length) {
            return (
              <Button
                type="button"
                data-testid="MoreQuestion"
                onClick={handleShowMore}
                colorScheme={colorScheme}
              >
                MORE ANSWERED QUESTIONS
              </Button>
            );
          }
          return null;
        })()}
        {(() => {
          if (shownQuestions > 2 && currentList.length > 2) {
            return (
              <Button
                type="button"
                data-testid="MoreQuestion"
                onClick={handleShowLess}
                colorScheme={colorScheme}
              >
                SHOW LESS QUESTIONS
              </Button>
            );
          }
          return null;
        })()}
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
            overlay: {
              backgroundColor: (colorScheme ? '#49494990' : '#f5f5f575'),
            },
          }
        }
        >
          <AddAQuestionModal
            colorScheme={colorScheme}
            toggleModal={toggleModal}
            productId={productId}
            productName={productName}
            handleAddQuestion={handleAddQuestion}
          />
        </Modal>
        {/* Add a question button */}
        <Button
          type="button"
          data-testid="AddQuestion"
          onClick={toggleModal}
          colorScheme={colorScheme}
        >
          ADD A QUESTION +
        </Button>
      </div>
    </Wrapper>
  );
};

QandA.propTypes = {
  productId: PropTypes.number.isRequired,
  colorScheme: PropTypes.bool.isRequired,
  productName: PropTypes.string.isRequired,
};

const Button = styled.button`
  border: 0px;
  margin-top: 15px;
  margin-right: 15px;
  background: ${(props) => (props.colorScheme ? 'purple' : 'orange')};
  color: whitesmoke;
  padding: 15px;
  text-transform: uppercase;
  &:hover{ background: ${(props) => (props.colorScheme ? '#a64ca6' : '#ffc04c')}; }
  &:active{ background: ${(props) => (props.colorScheme ? '#660066' : '#cc8400')}; }
`;

const Wrapper = styled.section`
padding: 1em;
background: ${(props) => (props.colorScheme ? '#ababab' : '#c4c4c4')};
color: ${(props) => (props.colorScheme ? 'whitesmoke' : 'black')}
font-family: sans-serif;
max-height: 100vh;
`;

const Title = styled.h1`
  font-size: 22px;
  color: ${(props) => (props.colorScheme ? 'whitesmoke' : 'black')};
`;

export default QandA;
