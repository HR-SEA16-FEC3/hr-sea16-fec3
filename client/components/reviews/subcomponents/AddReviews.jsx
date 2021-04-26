import React, { useState } from 'react';
import styled from 'styled-components';
import ReviewList from './ReviewList.jsx';
import modalStyles from '../../../sharedStyles/modalStyles';
import dummyData from './DummyData/product_reviews_example.js';

const AddReviews = (props) => (
  <div className="Add-Review-Modal">
    <modalStyles.Title>
      Submit your Review!
    </modalStyles.Title>
    <modalStyles.Wrapper
      id="submit-answer-form"
    >
      <modalStyles.Label htmlFor="Reviews-Summary">
        Add a headline
        <br />
        <modalStyles.Input
          type="text"
          id="Reviews-headline"
          name="Reviews-headline"
          maxLength="60"
          placeholder="What's most important to know"
          className="Reviews-headline"
          required
        />
      </modalStyles.Label>
      <br />
      <modalStyles.Label htmlFor="Reviews-Body">
        Add your review
        <br />
        <modalStyles.Input
          type="text"
          id="Reviews-Body"
          name="Reviews-Body"
          maxLength="1000"
          minLength="50"
          placeholder="What did you like or dislike?"
          className="Reviews-Body"
          required
        />
      </modalStyles.Label>
      <br />
      <modalStyles.Label htmlFor="Reviews-recommend">
        Would you recommend this product?
        <Select id="recommends">
          <option value="null">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </Select>
      </modalStyles.Label>
      <br />
      <div>
        How Would You Rate It?
        <Select id="recommends">
          <option value="null">Select</option>
          <option value="5">5 Star</option>
          <option value="4">4 Star</option>
          <option value="3">3 Star</option>
          <option value="2">2 Star</option>
          <option value="1">1 Star</option>
        </Select>
      </div>
      <br />
      <modalStyles.Label htmlFor="Reviews-nickname">
        Add a username
        <br />
        <modalStyles.Input
          type="text"
          id="Reviews-nickname"
          name="Reviews-nickname"
          maxLength="60"
          placeholder="Example:Berkut488"
          required
        />
      </modalStyles.Label>
      <br />
      <modalStyles.Disclaimer>
        Don't use your real name
      </modalStyles.Disclaimer>
      <modalStyles.Label htmlFor="Reviews-email">
        Your email address
        <br />
        <modalStyles.Input
          type="text"
          id="Reviews-email"
          name="Reviews-email"
          maxLength="60"
          placeholder="Example:Shopper22@mail.com"
          required
        />
      </modalStyles.Label>
      <br />
      <modalStyles.Label htmlFor="Review-Photos">
        Upload your photos
        <br />
        <modalStyles.Input
          type="text"
          id="photo-upload"
          name="photo-upload"
          placeholder="Link your image here"
        />
      </modalStyles.Label>
      <br />
      <modalStyles.Button
        type="submit"
      >
        Submit Photo
      </modalStyles.Button>
      <modalStyles.Button
        type="submit"
      >
        Remove Photo
      </modalStyles.Button>
      <br />
      <br />

    </modalStyles.Wrapper>
  </div>
);

const Select = styled.select`
  width: 100%;
  height: 35px;
  background: whitesmoke;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: solid;
  border-width: 1px;
  ;

  option {
    color: black;
    background: whitesmoke;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export default AddReviews;
