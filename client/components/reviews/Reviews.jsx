import React, { useState } from 'react';
import styled from 'styled-components';
import ReviewList from './subcomponents/ReviewList.jsx';
import ReviewMeta from './subcomponents/ReviewMeta.jsx';
import dummyData from './subcomponents/DummyData/product_reviews_example';
import metaDummyData from './subcomponents/DummyData/product_metaData_example';

// destructure the props, change var naming
function Reviews({ metadata, data }) {
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
          <ReviewList dummyData={dummyData.results} />
          <ButtonStyle>
            <span><Button type="button">More Reviews</Button></span>
            <span><Button type="button">Add A Review +</Button></span>
          </ButtonStyle>
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

export default Reviews;

// <ReviewSort />
