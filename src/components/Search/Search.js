import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: ''
        }
    }

    updateQuery(query){
        this.setState({
            query: query
        })
    }


    handleSubmit(e){
        e.preventDefault();
        // const query = ((query) => (query))(this.state);
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
                console.log(data);
                this.setState({
                    books: data,
                    error: null
                    })
                this.props.updateInfo(data, this.state.query);
            })
            .catch(err => {
                this.setState({
                    error: err.message
                })
            })
    }


  render(){
    return (
      <div className="search-bar">
        <form onSubmit={e => {this.handleSubmit(e)}}>
            <label htmlFor="search">Search: </label>
            <input 
                type="text"
                name="search"
                placeholder="Book Name"
                value={this.state.query}
                onChange={e => this.updateQuery(e.target.value)}
            />
            <input 
                type="submit" 
            />
        </form>
    </div>
    );
  }
 
}

export default Search;