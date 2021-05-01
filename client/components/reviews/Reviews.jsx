import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReviewList from './subcomponents/ReviewList.jsx';
import ReviewMeta from './subcomponents/ReviewMeta.jsx';
import ReviewModal from './subcomponents/ReviewModal.jsx';
import ReviewSort from './subcomponents/ReviewSort.jsx';
import dummyData from './subcomponents/DummyData/product_reviews_example';
import metaDummyData from './subcomponents/DummyData/product_metaData_example';

function Reviews({ productId }) {
  const [reviewResults, setReviewResults] = useState({});
  const [metaData, setMetaData] = useState({});
  const [tiles, setTiles] = useState(2);
  const [modal, setModal] = useState(false);
  const [parentFilter, setParentFilter] = useState(dummyData.results);

  const fetchReviewData = () => {
    axios.get(`/reviews/${productId}`)
      .then((data) => (
        setReviewResults(data.data.results),
        setTiles(2)
      ))
      .catch((error) => {
        throw error;
      });
  };

  const fetchMetaReviewData = () => {
    axios.get(`/reviews/meta/${productId}`)
      .then((data) => (
        setMetaData(data.data)
      ))
      .catch((error) => {
        throw error;
      });
  };

  useEffect(() => {
    if (productId) {
      fetchReviewData();
      fetchMetaReviewData();
    }
  }, [productId]);

  return (
    <div data-testid="Reviews">
      <Wrapper>
        <LeftSection>
          {Object.keys(metaData).length > 0
            ? <ReviewMeta metaDummyData={metaData} />
            : <div>Loading!</div>}
        </LeftSection>
        <RightSection>
          <RightTopSection>
            <div>
              <ReviewSort
                dummyData={dummyData}
                parentFilter={parentFilter}
                setParentFilter={setParentFilter}
              />

            </div>
          </RightTopSection>
          <PseudoScroll>
            {reviewResults.length
              ? <ReviewList dummyData={reviewResults.slice(0, tiles)} />
              : <div>No Reviews!</div> }
          </PseudoScroll>
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
            reviewData={dummyData.results}
          />
        </RightSection>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.section`
  font-family: sans-serif;
  display: flex;
  flex-direction: row;
  padding: 1em;
  background: ${(props) => (props.colorScheme ? '#ababab' : '#c4c4c4')};
  color: ${(props) => (props.colorScheme ? 'whitesmoke' : 'black')}
  max-height: 100vh;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  order: 1;
  flex-basis: 20%;
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

const PseudoScroll = styled.div`
padding: 0em;
max-height: 38vh;
overflow: auto;
&::-webkit-scrollbar {
  width: auto;
  height: auto;
}
&::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  background-color: ${(props) => (props.colorScheme ? 'lightgrey' : 'darkgrey')};
}
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
