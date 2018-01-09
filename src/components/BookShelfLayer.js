import React, { Component } from 'react'
import Book from './Book'
import { camelcaseToText, classedByProperty } from '../utils'
class BooKShelfLayer extends Component{

  makeViewArray(arr){
    let typeOfShelf =classedByProperty(arr,"shelf"),
        tempBookShelf=[];
    for(let temp in typeOfShelf){
      tempBookShelf.push(
        <div key={temp}>
          <h2 className="bookshelf-title">{camelcaseToText(temp)}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {typeOfShelf[temp].map((book)=>{return <li key={book.id}><Book book={book} bookFactory={this.props.bookFactory}/></li>})}
            </ol>
          </div>
        </div>
      );
    }
    return tempBookShelf;
  }
  render(){
    return (
      <div className="bookshelf">
        {this.makeViewArray(this.props.books)}
      </div>
    )
  }
}

export default BooKShelfLayer;