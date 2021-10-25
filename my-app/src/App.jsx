import * as React from 'react';
import Home from './components/Home';

class App extends React.Component {
constructor(props){
  super(props);
if(process.env.NODE_ENV !== 'production'){
  console.log("We're not ready to production yet.");
  require('dotenv').config();
}
this.BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
}
  render() {
    return (
      <div>
        <Home BACKEND_URL={this.BACKEND_URL}/>
      </div>
    )
  }

}

export default App;
