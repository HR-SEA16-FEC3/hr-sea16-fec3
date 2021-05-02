import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ReviewSort = ({ setParentFilter, parentFilter, dummyData }) => {
  const [sortMethod, setSortMethod] = useState('');

  useEffect(() => {
    const filteredList = parentFilter.slice();
    if (sortMethod === 'Newest') {
      filteredList.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortMethod === 'Helpful') {
      filteredList.sort((a, b) => b.helpfulness - a.helpfulness);
    } else if (sortMethod === 'Relevance') {
      filteredList.sort((a, b) => new Date(b.date) - new Date(a.date)
      || b.helpfulness - a.helpfulness);
    }
    setParentFilter(filteredList);
  }, [sortMethod]);

  return (
    <div>
      {dummyData.length}
&nbsp;reviews, sorted by&nbsp;
      <Select
        id="sort-reviews"
        onChange={(e) => { setSortMethod(e.target.value); }}
      >
        <option value="">Select</option>
        <option value="Relevance">Relevance</option>
        <option value="Newest">Newest</option>
        <option value="Helpful">Helpful</option>

      </Select>
    </div>
  );
};

ReviewSort.propTypes = {
  // dummyData: PropTypes.object.isRequired,
  // setParentFilter: PropTypes.func.isRequired,
  // parentFilter: PropTypes.array.isRequired,
};

// setParentFilter, parentFilter, dummyData

const Select = styled.select`
  width: auto;
  height: 35px;
  background: #E7E7E7;
  color: gray;
  font-size: 14px;
  border: none;
  `;

export default ReviewSort;
// x reviews, sorted by y
// helpfulness, newest, date
