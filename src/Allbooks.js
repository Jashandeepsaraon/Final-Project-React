import React from 'react'
import './App.css'
import SingleBook from './SingleBook';
import { Route, Link } from "react-router-dom"

class AllBooks extends React.Component {

    componentDidMount(){
        this.props.getallfunc()
    }

    render() {
        return (
            <Route exact path="/" render={() => (
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Currently Reading</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {this.props.shelfBooks.filter((oneBook)=> oneBook.shelf === 'currentlyReading')
                                            .map((mybook, index) => (
                                                <SingleBook key={index} mybook={mybook} moveBooks={this.props.moveBooks} />
                                            ))
                                        }
                                    </ol>
                                </div>
                            </div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Want to Read</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {this.props.shelfBooks.filter((myBk) => myBk.shelf === 'wantToRead')
                                            .map((mybook, index) => (
                                                <SingleBook key={index} mybook={mybook} moveBooks={this.props.moveBooks} />
                                            ))
                                        }
                                    </ol>
                                </div>
                            </div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Read</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {this.props.shelfBooks.filter((aBook)=> aBook.shelf === 'read')
                                            .map((mybook, index) => (
                                                <SingleBook key={index} mybook={mybook} moveBooks={this.props.moveBooks} />
                                            ))
                                        }
               
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="open-search">
                        <Link to="/searchBooks"><button>Add a book</button></Link>
                    </div>
                </div>
            )}/>
           
      
        )
    }
}

export default AllBooks
