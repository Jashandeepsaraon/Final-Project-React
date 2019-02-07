import React from 'react'
import SingleBook from './SingleBook';
import { Route, Link } from "react-router-dom"

class SearchBooks extends React.Component {
    render() {
        return (
            <Route exact path="/searchBooks" render={()=>(
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to="/">Go Home</Link>
                        <div className="search-books-input-wrapper">
                            {/*
                                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                                You can find these search terms here:
                                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                
                                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                                you don't find a specific author or title. Every search is limited by search terms.
                            */}
                            <input type="text" placeholder="Search by title or author" value={this.props.query} 
                                onChange={(event) =>this.props.updateBook(event.target.value)}/>
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">{this.props.searchBooks && this.props.searchBooks.map((searchbook, index) => (
                            <SingleBook key={index} mybook={searchbook} moveBooks={this.props.moveBooks}/>
                        ))}
                        </ol>
                    </div>
                </div>
            )}/>
      
        )
    }
}

export default SearchBooks