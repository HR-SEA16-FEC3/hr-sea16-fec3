import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/overview/Overview.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    return (
      <div>
        Hello World!

        <Overview />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('App'),
);

export default App;
