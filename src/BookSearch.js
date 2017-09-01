import React, {Component} from 'react'
import Book from './Book'
import {Link} from 'react-router-dom'

class BookSearch extends Component {
  handleChange = (event) => {
    this.props.onSearch(event.target.value);
  }
  render(){
    console.log(this.props.results)

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" onChange={this.handleChange}/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.props.results.map((book,index) =>(
              <li key={book.id}>
                <Book
                  coverImage={book.imageLinks.smallThumbnail}
                  coverSize={{width: 128, height: 196}}
                  authors={book.authors}
                  title={book.title}
                  status='read'
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}
export default BookSearch
