import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooksComponent'
import BookShelf from './BookShelfComponent'
import './App.css'
import { BookActions } from './utils'

class BooksApp extends React.Component {
  state = {
    books:[]
  }
  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({books})
    })
  }

  bookFactory = (action,{book=null,shelf="",query="",maxResults=100,bookid=""}) => {
    //{book=null,shelf="",query="Robotics",maxResults=20,bookid="QHUlp1tI-JwC"}
    if(action===BookActions.Get){
      return BooksAPI.get(bookid)
    } else if (action===BookActions.GetAll) {
      return BooksAPI.getAll().then((books)=>{this.setState({books});return books})
    } else if (action===BookActions.Update){
      return BooksAPI.update(book, shelf)
    } else if (action===BookActions.Search){
      return BooksAPI.search(query, maxResults)
    } 
  }

  render() {
    return (
      <div className="app">
        <Route path="/SearchBooks" render={()=>{return <SearchBooks books={this.state.books} bookFactory={this.bookFactory.bind(this)} />}} />
        <Route exact path="/" render={ () => {
            return <BookShelf books={this.state.books} bookFactory={this.bookFactory.bind(this)} />
          }
        } />
      </div>
    )
  }
}

export default BooksApp
