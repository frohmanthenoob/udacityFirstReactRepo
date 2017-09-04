import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooksComponent'
import BookShelf from './BookShelfComponent'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books:[]
  }
  componentDidMount(){
    BooksAPI.getAll().then((books)=>{this.setState({books:books})})
  }
  render() {
    return (
      <div className="app">
        <Route path="/SearchBooks" render={()=>{return <SearchBooks books={this.state.books} />}} />
        <Route exact path="/" render={()=>{return <BookShelf books={this.state.books} />}} />
      </div>
    )
  }
}

export default BooksApp
