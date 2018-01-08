import React, { Component } from 'react'
import { BookActions } from './utils'
/*
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
*/

class Book extends Component{

  updateBookShelf(book,shelf){
    this.props.bookFactory(BookActions.Update,{book,shelf}).then(data=>{
      this.props.bookFactory(BookActions.GetAll,{}).then(data=>{
        if(this.props.updateViewMethod){
          this.props.updateViewMethod()
        }
      })
    })
  }
  
  render(){
    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: "url("+(this.props.book.imageLinks?this.props.book.imageLinks.smallThumbnail:"")+")" }}></div>
          <div className="book-shelf-changer">
            <select value={this.props.book.shelf} onChange={(event) => {this.updateBookShelf(this.props.book, event.target.value)}}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    )
  }
}
export default Book;