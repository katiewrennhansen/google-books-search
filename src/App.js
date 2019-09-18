import React, { Component } from 'react';
import BooksList from './components/BooksList/BooksList';
import SearchFilter from './components/SearchFilter/SearchFilter';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
      query: ''
    }
  }


  //update state with books array from Search.js API call
  updateInfo(books){
    this.setState({
      books: books.items
    })
  }


  render(){
    return (
      <div className="App">
        <div className="search">
          <h1>Google Book Search</h1>
          <SearchFilter 
            updateInfo={books => this.updateInfo(books)}
          />
        </div>
          <BooksList 
            books={this.state.books}
          />
      </div>
    );
  }
 
}

export default App;
