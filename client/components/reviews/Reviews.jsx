import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReviewList from './subcomponents/ReviewList.jsx';
import ReviewMeta from './subcomponents/ReviewMeta.jsx';
import ReviewModal from './subcomponents/ReviewModal.jsx';
import ReviewSort from './subcomponents/ReviewSort.jsx';
import dummyData from './subcomponents/DummyData/product_reviews_example';

function Reviews(
  {
    productId,
    colorScheme,
  },
) {
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
      <Wrapper
        colorScheme={colorScheme}
      >
        <LeftSection>
          {Object.keys(metaData).length > 0 && Object.values(metaData.ratings).length > 0
            ? <ReviewMeta metaDummyData={metaData} colorScheme={colorScheme} />
            : <div>No reviews yet! ¯\_( ͡° ͜ʖ ͡°)_/¯ </div>}
        </LeftSection>
        <RightSection>
          <RightTopSection>
            <div>
              {reviewResults.length
                ? (
                  <ReviewSort
                    dummyData={reviewResults}
                    parentFilter={parentFilter}
                    setParentFilter={setParentFilter}
                  />
                )
                : <div>No Reviews!</div>}
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
                colorScheme={colorScheme}
              >
                More Reviews
              </Button>
            </span>
            <span>
              <Button
                type="button"
                onClick={() => setModal(true)}
                colorScheme={colorScheme}
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
  background: ${(props) => (props.colorScheme ? '#6f6f6f ' : '#D0D0D0')};
  color: ${(props) => (props.colorScheme ? 'whitesmoke' : 'black')};
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
  border: 0px solid;
  margin-top: 10px;
  margin-right: 10px;
  background: ${(props) => (props.colorScheme ? 'purple' : 'orange')};
  padding: 7px;
  font-size: 10px;
  color: white;
  text-transform: uppercase;
  width: 175px;
  &:hover{ background: ${(props) => (props.colorScheme ? '#a64ca6' : '#ffc04c')}; }
  &:active{ background: ${(props) => (props.colorScheme ? '#660066' : '#cc8400')}; }
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
