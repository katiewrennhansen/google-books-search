import React, { Component } from 'react';
import BooksList from './components/BooksList/BooksList';
import SearchFilter from './components/SearchFilter/SearchFilter';


// const books = [
//   {
//     title: 'Henry I',
//     author: 'C. Warren Hollister',
//     price: '$50.00',
//     description: 'The resulting volume is one that will be welcomed by students and general readers alike.'
//   },
//   {
//     title: 'Henry II',
//     author: 'C. Warren Hollister',
//     price: '$50.00',
//     description: 'The resulting volume is one that will be welcomed by students and general readers alike.'
//   },
//   {
//     title: 'Henry III',
//     author: 'C. Warren Hollister',
//     price: '$50.00',
//     description: 'The resulting volume is one that will be welcomed by students and general readers alike.'
//   }
// ];


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
      query: ''
    }
  }

  componentDidMount(){
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.query}&key=AIzaSyCQ5Aw6z5Wu_U8hewE6rVR6WDvnNYw08cI`;
    const options = {
      method: 'GET'
    }

    fetch(url, options)
      .then(res => {
        if(!res.ok){
          throw new Error('something went wrong');
        }
        return res.json()
      })
      .then(data => {
        console.log(data)
        this.setState({
          books: data.items,
          error: null
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
  }

  updateInfo(books){
    this.setState({
      books: books.items
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
          <SearchFilter 
            updateInfo={query => this.updateInfo(query)}
          />
          <BooksList 
            books={this.state.books}
          />
        </header>
      </div>
    );
  }
 
}

export default App;
