import React, { useState } from 'react';
import styled from 'styled-components';
import ReviewList from './subcomponents/ReviewList.jsx';
import ReviewMeta from './subcomponents/ReviewMeta.jsx';
import ReviewModal from './subcomponents/ReviewModal.jsx';
import OpenModalButton from './subcomponents/OpenModalButton.jsx';
import dummyData from './subcomponents/DummyData/product_reviews_example';
import metaDummyData from './subcomponents/DummyData/product_metaData_example';

// destructure the props, change var naming
function Reviews({ metadata, data }) {
  const [tiles, setTiles] = useState(2);
  const [modal, setModal] = useState(false);

  function handlOpenModal(open) {
    console.log('close modal');
    toggle(open);
  }

  return (
    <div data-testid="Reviews">
      <ReviewListStyle>
        <LeftSection>
          <ReviewMeta metaDummyData={metaDummyData} />
        </LeftSection>
        <RightSection>
          <RightTopSection>
            <div>
              x reviews, sorted by y
            </div>
          </RightTopSection>
          <ReviewList dummyData={dummyData.results.slice(0, tiles)} />
          <ButtonStyle>
            <span>
              <Button
                type="button"
                onClick={() => setTiles(tiles + 2)}
              >
                More Reviews
              </Button>
            </span>
            <span>
              <Button
                type="button"
                onClick={() => setModal(true)}
              >
                Add A Review +
              </Button>
            </span>
          </ButtonStyle>
          <ReviewModal
            onClose={() => setModal(false)}
            open={modal}
          />
          <ModalContent />
        </RightSection>
      </ReviewListStyle>
    </div>
  );
}

const ReviewListStyle = styled.section`
  font-family: sans-serif;
  display: flex;
  flex-direction: row;
  padding:24px;
`;
const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  order: 1;
  flex-basis: 30%;
  padding:16px;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  order: 2;
  flex-basis: 70%;
  padding:16px;
`;

const RightTopSection = styled.div`
display:flex;
padding:16px;
flex-direction: column;
`;

const Button = styled.button`
flex-direction:column
  border: 1px solid black;
  margin-top: 15px;
  margin-right: 15px;
  background: white;
  padding: 15px;
  text-transform: uppercase;
  &:hover{ background: lightgrey }
`;

const ButtonStyle = styled.div`
  flex-direction: column;
`;

const ModalContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: #000000;
  }
`;

export default Reviews;

// <ReviewSort />
