import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ReviewSort = (props) => {
  const [sortMethod, setSortMethod] = useState('');
  const [filteredData, setFilteredData] = useState(props.dummyData.results);

  useEffect(() => {
    if (sortMethod === 'Newest') {
      setFilteredData(filteredData.sort((a, b) => new Date(b.date) - new Date(a.date)));
    } else if (sortMethod === 'Helpful') {
      setFilteredData(filteredData.sort((a, b) => b.helpfulness - a.helpfulness));
    } else if (sortMethod === 'Relevance') {
      setFilteredData(filteredData.sort((a, b) => new Date(b.date) - new Date(a.date) || b.helpfulness - a.helpfulness));
    }
  }, [sortMethod]);

  return (
    <div>
      {props.dummyData.results.length}
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

const Select = styled.select`
  width: auto;
  height: 35px;
  background: whitesmoke;
  color: gray;
  font-size: 14px;
  border: none;
  `;

export default ReviewSort;
// x reviews, sorted by y
// helpfulness, newest, date
