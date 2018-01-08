import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Autocomplete from 'react-autocomplete'
import { SearchTerm } from './utils'
import Book from './BookComponent'
import { BookActions } from './utils'
/*
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
*/

class SearchBooks extends Component{
  
    state = {
      books:[],
      value:''
    }

    componentDidMount(){
      
    }

    checkBooks(){
      let existBooks = this.props.books.map(data=>data.id)
      this.setState({books:this.state.books.filter(book=>existBooks.indexOf(book.id)<0)})
    }

    updataBooks(value){
      this.props.bookFactory(BookActions.Search,{query:value,maxResults:100})
      .then(data=>{
        if (data['error']){
          this.setState({books:[],value: value||''})
        }else{
          this.setState({books:data||[],value: value||''})
        }
        this.checkBooks()
      })
    }

    asyncUpdataBooks(){
      //performance reason
      this.updataBooks(this.state.value)
    }

    render(){
        return(
          <div>
            <div className="search-books">
              <div className="search-books-bar">
                <Link to="/" className="close-search" >Close</Link>
                <div className="search-books-input-wrapper">
                  {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                    
                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                  */}
                  
                  <Autocomplete
                  wrapperStyle={ {} }
                  items={SearchTerm.map(myItem=>{return {id:myItem,label:myItem}})}
                  shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                  getItemValue={item => item.label}
                  renderItem={(item, highlighted) =>
                    <div key={item.id} style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}} >
                      {item.label}
                    </div>
                  }
                  inputProps={
                    this.state.value!==""?
                    { placeholder: this.state.value }
                    :{ placeholder: 'Search by title or author' }
                  }
                  value={this.state.value}
                  onChange={e => {
                    this.setState({value:e.target.value},this.asyncUpdataBooks)
                  }}
                  onSelect={value => {
                    this.setState({value:value},this.asyncUpdataBooks)
                  }}
                  />
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                  {
                    this.state.books.map((book)=>{return <li key={book.id}><Book book={book} updateViewMethod={this.checkBooks.bind(this)}bookFactory={this.props.bookFactory}/></li>})
                  }
                </ol>
              </div>
            </div>
            
          </div>
        )
    }
}
export default SearchBooks