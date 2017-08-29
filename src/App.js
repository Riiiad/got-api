import React, { Component } from 'react';
import './App.css';
import firebase, { auth, provider } from './firebase.js';

import Test from './comps/Test';

class App extends Component {
  constructor(){
    super();
    this.state = {
      search: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    fetch('https://api.got.show/api/characters/' + this.state.search, {
      method: 'get'
    }).then((res) => {
      // Convert to JSON
      return res.json();

    }).then(function(json) {
  	// <!DOCTYPE ....
  	console.log(json.data.name);
  });
  }
  handleSearch(e) {

    this.setState({
      [e.target.name]: e.target.value
    });

  }

  render() {
    return (
      <div>
        <Test />
        <form onSubmit={this.handleClick}>
          <input type="text" name="search" value={this.state.search} onChange={this.handleSearch} />
          <button>Click me!</button>
        </form>


      </div>
    );
  }
}

export default App;
