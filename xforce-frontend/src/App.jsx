import * as React from 'react';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <div>
        <Home BACKEND_URL={process.env.REACT_APP_BACKEND_URL}/>
      </div>
    )
  }

}

export default App;
