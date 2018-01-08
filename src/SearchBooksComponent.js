import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Autocomplete from 'react-autocomplete'
import { SearchTerm } from './SearchTerm'
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
                  wrapperStyle = {{}}
                  items={SearchTerm.map(myItem=>{return {id:myItem,label:myItem}})}
                  shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                  getItemValue={item => item.label}
                  renderItem={(item, highlighted) =>
                    <div key={item.id} style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}} >
                      {item.label}
                    </div>
                  }
                  inputProps={{ placeholder: 'Search by title or author' }}
                  value={this.state.value}
                  onChange={e => this.setState({ value: e.target.value })}
                  onSelect={value => this.setState({ value })}
                  />
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid"></ol>
              </div>
            </div>
            
          </div>
        )
    }
}
export default SearchBooks