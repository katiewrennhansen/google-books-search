import React, { Component } from 'react';
import './BooksList.css';
import BookItem from '../BookItem/BookItem';


class BooksList extends Component {
    
    render(){

        const books = this.props.books.map((item, i) => {
            return (
                <li className="list-item" key={i}>
                    <BookItem book={item}/>
                    <hr />
                </li>
                
            )
        });

        return (
            <div className="books-list">
                <h2>Results</h2>
                <ul>
                    { books }
                </ul>
            </div>
        );
    }
 
}

export default BooksList;
