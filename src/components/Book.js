import React, { Component } from 'react'
import { BookActions } from '../utils'

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
  
  shelfDefaultValue(){
    let value = this.props.book.shelf
    return value ? value : "none"
  }

  bookCoverDefaultValue(){
    const checkURL = this.props.book.imageLinks
    return checkURL?checkURL.smallThumbnail:"http://via.placeholder.com/128x193?text=No%20Cover"
  }

  render(){
    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${this.bookCoverDefaultValue()})` }}></div>
          <div className="book-shelf-changer">
            <select value={this.shelfDefaultValue()} onChange={(event) => {this.updateBookShelf(this.props.book, event.target.value)}}>
              <option value="disabled" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors ? this.props.book.authors.join(', ') : ''}</div>
      </div>
    )
  }
}
export default Book;