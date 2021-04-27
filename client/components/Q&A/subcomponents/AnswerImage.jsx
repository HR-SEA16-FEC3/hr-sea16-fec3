import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

const AnswerImage = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div>
      <AnswerImg src={props.url} onClick={toggleModal} alt="image posted by a user" />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        style={
          {
            content: {
              width: 'max-content',
              height: '80vh',
              margin: 'auto',
              background: 'whitesmoke',
            },
          }
        }
      >
        <ModalImg src={props.url} onClick={toggleModal} alt="image posted by a user" />
      </Modal>
    </div>
  );
};

const AnswerImg = styled.img`
height: auto;
width: auto;
max-height: 100px;
margin: 0 10px;
border-radius: 5px;
cursor: pointer;
`;

const ModalImg = styled.img`
height: auto;
width: auto;
max-height: 100%;
margin: auto;
`;

export default AnswerImage;
