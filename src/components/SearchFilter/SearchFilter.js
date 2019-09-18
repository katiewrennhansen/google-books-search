import React, { Component } from 'react';
import './SearchFilter.css';
import Search from '../Search/Search';

class SearchFilter extends Component {
  render(){
    return (
      <div className="search-bar">
        <h2>Search Bar</h2>
        <Search 
            updateInfo={this.props.updateInfo}
        />
      </div>
    );
  }
 
}

export default SearchFilter;