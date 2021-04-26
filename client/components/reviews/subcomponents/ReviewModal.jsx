import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Reviews from '../Reviews.jsx';
import AddReviews from './AddReviews.jsx';

const modalVariant = {
  initial: { opacity: 0 },
  open: { opacity: 1 },
  exit: { opacity: 0 },
};
const containerVariant = {
  initial: { top: '-50%', transition: { type: 'spring' } },
  open: { top: '50%' },
  exit: { top: '-50%' },
};

const ReviewModal = ({ open, onClose }) => {
  if (!open) {
    return null;
  }
  return (
    <AnimatePresence>
      {open && (
        <Overlay
          initial="initial"
          animate="open"
          exit="exit"
          variants={modalVariant}
        >
          <ModalContainer>
            <CloseButton
              type="button"
              onClick={onClose}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20.39 20.39"
            >
              <title>close</title>
              <line
                x1="19.39"
                y1="19.39"
                x2="1"
                y2="1"
                fill="none"
                stroke="#000000"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <line
                x1="1"
                y1="19.39"
                x2="19.39"
                y2="1"
                fill="none"
                stroke="#000000"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </CloseButton>
            <AddReviews />
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

ReviewModal.propTypes = {};

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;
const ModalContainer = styled(motion.div)`
  width: 50%;
  height: 50%;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
`;
const CloseButton = styled.svg`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 18px;
  top: 18px;
  cursor: pointer;
`;

export default ReviewModal;

// if (open === false) {
//   return null;
// }

// return ReactDOM.createPortal(
//   <div className="modal-overlay" id="modal-root">
//     <div className="modal">
//       <a className="modal-close" onClick={onClose}>X</a>
//       {children}
//     </div>
//   </div>,
//   document.getElementById('active-modal'),
// );
