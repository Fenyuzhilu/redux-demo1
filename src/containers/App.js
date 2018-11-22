import React, { Component } from 'react';
import RouterView from "router";
import {BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
class App extends Component {
  render() {
   
    
    return (
      <div className="App">
      
        <BrowserRouter>
             <RouterView></RouterView>
         </BrowserRouter>

      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return state.Goodlist
}

export default connect(mapStateToProps)(App);
