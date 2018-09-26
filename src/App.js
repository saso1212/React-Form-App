import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import FormBuilder from './containers/FormBuilder/FormBuilder';

import classes from './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className={classes.App}>
            <FormBuilder/>
      </div>
      </BrowserRouter>
  
    );
  }
}

export default App;
