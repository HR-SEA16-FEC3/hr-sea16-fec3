import React, { useState } from 'react';

import Overview from './components/overview/Overview';
import QandA from './components/Q&A/Q&A';
import Reviews from './components/reviews/Reviews';

const App = () => {
  const [countTest, setCountTest] = useState(0);

  return (
    <div>
      <Overview />
      <QandA />
      <Reviews />
      <button
        type="button"
        onClick={() => setCountTest(countTest + 1)}
      >
        {countTest}
      </button>
    </div>
  );
};

// ReactDOM.render(
//   <App />,
//   document.getElementById('App'),
// );
export default App;
