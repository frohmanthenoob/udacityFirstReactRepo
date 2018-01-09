import React from 'react'
import { Route, Switch } from 'react-router-dom'
import * as BooksAPI from './api/BooksAPI'
import SearchBooks from './components/SearchBooks'
import BookShelf from './components/BookShelf'
import NoMatch from './components/NoMatch'
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
        <Switch>
          <Route path="/SearchBooks" render={()=>{return <SearchBooks books={this.state.books} bookFactory={this.bookFactory.bind(this)} />}} />
          <Route exact path="/" render={ () => { return <BookShelf books={this.state.books} bookFactory={this.bookFactory.bind(this)} />}} />
          <Route component={ NoMatch }/>>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
