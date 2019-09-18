import React, { Component } from 'react';
import './Search.css';
import { thisExpression } from '@babel/types';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: '',
            filter: '',
            type: ''
        }
    }

    //update state query value with value that was input into form
    updateQuery(query){
        this.setState({
            query: query
        })
    }

    updateFilter(filter){
        this.setState({
            filter: filter
        })
    }

    updatePrintType(type){
        this.setState({
            type: type
        })
    }

    //call API with newly input data on form submission
    handleSubmit(e){
        e.preventDefault();
        //create url based on search and filter parameters
        let url = '';
        if (this.state.filter !== '' && this.state.type !== ''){
            url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.query}&filter=${this.state.filter}&printType=${this.state.type}&key=AIzaSyCQ5Aw6z5Wu_U8hewE6rVR6WDvnNYw08cI`;
        } else if (this.state.filter !== '' && this.state.type === ''){
            url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.query}&filter=${this.state.filter}&key=AIzaSyCQ5Aw6z5Wu_U8hewE6rVR6WDvnNYw08cI`;
        } else if (this.state.type !== '' && this.state.filter === ''){
            url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.query}&printType=${this.state.type}&key=AIzaSyCQ5Aw6z5Wu_U8hewE6rVR6WDvnNYw08cI`;
        } else {
            url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.query}&key=AIzaSyCQ5Aw6z5Wu_U8hewE6rVR6WDvnNYw08cI`;
        }
        
        const options = {
        method: 'GET'
        }
        //call google books API
        fetch(url, options)
            .then(res => {
                if(!res.ok){
                throw new Error('something went wrong');
                }
                return res.json()
            })
            .then(data => {
                this.setState({
                    books: data,
                    error: null
                    })
                console.log(data);
                //update books array in App.js with new data
                this.props.updateInfo(data);
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
            <label htmlFor="filter">Book Type</label>
            <select 
                name="filter"
                value={this.state.filter}
                onChange={e => this.updateFilter(e.target.value)}
            >
                <option value="">No Filter</option>
                <option value="partial">Partial Text</option>
                <option value="full">Full Book</option>
                <option value="free-ebooks">Free E-Book</option>
                <option value="paid-ebooks">Paid E-Book</option>
                <option value="ebooks">E-Books</option>
            </select>
            <label htmlFor="type">Print Type</label>
            <select 
                name="type"
                value={this.state.type}
                onChange={e => this.updatePrintType(e.target.value)}
            >
                <option value="all">All</option>
                <option value="books">Books</option>
                <option value="magazines">Magazines</option>
            </select>

            <input 
                type="submit" 
            />
        </form>
    </div>
    );
  }
 
}

export default Search;