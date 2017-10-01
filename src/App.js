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
    BooksAPI.getAll().then((books)=>{this.setState({books})})
  }

  bookFactory(action,{book=null,shelf="",query="Robotics",maxResults=20,bookid="QHUlp1tI-JwC"}){
    if(action==="Get"){
      BooksAPI.get(bookid).then((books)=>{
        BooksAPI.getAll().then((books)=>{this.setState({books})});
      })
    } else if(action==="Update"){
      BooksAPI.update(book, shelf).then((books)=>{
        BooksAPI.getAll().then((books)=>{this.setState({books})});
      })
    } else if(action==="Search"){
      BooksAPI.search(query, maxResults).then((books)=>{
        BooksAPI.getAll().then((books)=>{this.setState({books})});
      })
    } else {
      BooksAPI.getAll().then((books)=>{this.setState({books})})
    }
  }

  bookGetAll(){
    BooksAPI.getAll().then((books)=>{this.setState({books})})
  }
  
  bookUpdate(book, shelf){
    BooksAPI.update(book, shelf).then(()=>{
      BooksAPI.getAll().then((books)=>{this.setState({books})});
    })
  }

  atob(a){
    console.log(a)
    this.bookUpdate.call(this,this.state.books.filter((book)=>book.title==="The Linux Command Line")[0],"currentlyReading")
  }

  btoa(){
    this.bookUpdate.call(this,this.state.books.filter((book)=>book.title==="The Linux Command Line")[0],"read")
  }

  render() {
    return (
      <div className="app">
      <input type="button" value="clickl" onClick={this.atob.bind(this,123)} />
      <input type="button" value="click2" onClick={this.btoa.bind(this)} />
        <Route path="/SearchBooks" render={()=>{return <SearchBooks books={this.state.books} bookFactory={this.bookFactory.bind(this)} />}} />
        <Route exact path="/" render={()=>{return <BookShelf books={this.state.books} bookFactory={this.bookFactory.bind(this)} />}} />
      </div>
    )
  }
}

export default BooksApp
