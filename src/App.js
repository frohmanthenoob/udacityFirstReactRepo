import React from 'react'
import {Route} from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import Search from './SearchComponent'
import BookShelf from './BookShelfComponent'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }

  render() {
    return (
      <div className="app">
        <Route path="/Search" render={()=>{return <Search />}} />
        <Route exact path="/" render={()=>{return <BookShelf />}} />
      </div>
    )
  }
}

export default BooksApp
