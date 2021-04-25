import React, { useState } from 'react';
import ReviewList from './ReviewList.jsx';

const AddReviews = (props) => (
  <div className="Add-Review-Modal">
    <p className="modal-header">
      Submit your Review for a !
    </p>
    <form id="submit-answer-form">
      <label htmlFor="Reviews-Summary">Add a headline</label>
      <br />
      <textarea
        type="text"
        id="Reviews-headline"
        name="Reviews-headline"
        maxLength="60"
        placeholder="What's most important to know"
        className="Reviews-headline"
        required
      />
      <br />
      <label htmlFor="Reviews-Body">Add your review</label>
      <br />
      <textarea
        type="text"
        id="Reviews-Body"
        name="Reviews-Body"
        maxLength="1000"
        minLength="50"
        placeholder="What did you like or dislike?"
        className="Reviews-Body"
        required
      />
      <br />
      <div>
        Would you recommend this product?
        <select id="recommends">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <br />
      <div>
        How Would You Rate It? (Please Make Sure To Click!)
        {/* <Rating /> */}
        ;
      </div>
      <br />
      <label htmlFor="Reviews-nickname">Add a username</label>
      <br />
      <input
        type="text"
        id="Reviews-nickname"
        name="Reviews-nickname"
        maxLength="60"
        placeholder="Example: Berkut488"
        required
      />
      <br />
      <p className="modal-privacy-warning">
        Don't use your real name
      </p>
      <label htmlFor="Reviews-email">Your email address</label>
      <br />
      <input
        type="text"
        id="Reviews-email"
        name="Reviews-email"
        maxLength="60"
        placeholder="Example: smith23@mail.com"
        required
      />
      <br />
      <label htmlFor="Review-Photos">Upload your photos</label>
      <br />
      <input
        type="text"
        id="photo-upload"
        name="photo-upload"
        placeholder="Link your image here"
      />
      <br />
      <button>
        Submit Photo
      </button>
      {/* {characteristicsRadio} */}
      <div
        className="photo-upload-preview-container"
        id="photo-upload-preview-container"
      />
      <button>
        Remove Photo
      </button>
      <br />
      <br />

    </form>
  </div>
);

export default AddReviews;
