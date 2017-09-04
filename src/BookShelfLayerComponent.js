import React, { Component } from 'react'
import Book from './BookComponent'

class BooKShelfLayer extends Component{

  camelcaseToText(str){
    const upCaseRegx = /\.?([A-Z])/g,
          camelCase = (all,letter)=>{return " " + letter;},
          upCaseFirst = (text)=>{return text.charAt(0).toUpperCase() + text.slice(1)};
    return upCaseFirst(str.replace(upCaseRegx,camelCase));
  }

  makeViewArray(arr){
    let tempText = [],
    typeOfShelf = arr.reduce((accumulator,currentValue)=>{
        if(tempText.includes(currentValue.shelf)){
            accumulator[currentValue.shelf].push(currentValue)
        } else {
            accumulator[currentValue.shelf]=[];
            accumulator[currentValue.shelf].push(currentValue);
            tempText.push(currentValue.shelf)
        }
        return accumulator;
    },{});
    const tempBookShelf=[];
    for(let temp in typeOfShelf){
      tempBookShelf.push(
          <div>
            <h2 className="bookshelf-title">{this.camelcaseToText(temp)}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {typeOfShelf[temp].map((book)=>{return <li key={book.id}><Book book={book}/></li>})}
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