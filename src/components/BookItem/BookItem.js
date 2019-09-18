import React, { Component } from 'react';
import './BookItem.css';


class BooksItem extends Component {

    render(){

        const book = this.props.book;
     

        return (
            <div className="book-item">
                <div className="image-container">
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt="book" />
                </div>
                <div className="book-content">
                    <h3><a href={book.accessInfo.webReaderLink} target="_blank">{book.volumeInfo.title}</a></h3>
                    <p><i>{book.volumeInfo.authors}</i></p>
                    <p>{book.volumeInfo.publisher}</p>
                    <p>{book.volumeInfo.description}</p>
                </div>
            </div>
        );
    }
 
}

export default BooksItem;