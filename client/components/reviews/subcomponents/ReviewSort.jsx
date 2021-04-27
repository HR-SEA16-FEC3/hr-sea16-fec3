import React from 'react';
import styled from 'styled-components';

const ReviewSort = (props) => {
  const size = 43;
  console.log(props.dummyData.results);

  return (
    <div>
      {props.dummyData.results.length}
&nbsp;reviews, sorted by&nbsp;
      <select id="sort-reviews">
        <option value="">Select</option>
        <option value="relevance">relevance</option>
        <option value="newest">newest</option>
        <option value="helpful">helpful</option>

      </select>
    </div>
  );
};

export default ReviewSort;
// x reviews, sorted by y
