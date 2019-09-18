import React, { Component } from 'react';
import './BookItem.css';


class BooksItem extends Component {

    render(){

        const book = this.props.book;

        return (
            <div className="book-item">
                <h3>{book.volumeInfo.title}</h3>
                <p>{book.volumeInfo.publisher}</p>
                <p>{book.volumeInfo.description}</p>
            </div>
        );
    }
 
}

export default BooksItem;