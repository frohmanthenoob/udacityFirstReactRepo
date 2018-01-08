import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import BookShelfLayer from './BookShelfLayerComponent'

class BookShelf extends Component{
  componentDidMount(){
      
  }
  render(){
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelfLayer books={this.props.books} bookFactory={this.props.bookFactory}/>
        </div>
        <div className="open-search">
          <Link to="/SearchBooks">Add abook</Link>
        </div>
      </div>
    )
  }
}

export default BookShelf;
