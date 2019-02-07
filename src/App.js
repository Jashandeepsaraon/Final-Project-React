import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks';
import AllBooks from './AllBooks';

class BooksApp extends React.Component {
  state = {
    query: "",
    searchBooks: [],
    shelfBooks: []
  }
  
  getallfunc = () => {
    BooksAPI.getAll().then(res => this.setState({ shelfBooks: res })) 
  }

  updateBook = (value) => {
    this.setState({
      query: value
    })
    if(value === ""){
      (this.setState({ searchBooks: [] }))
    }else{
      BooksAPI.search(value).then(data => {
        if(data instanceof Array){
          this.setState({ searchBooks: data })
        }else{
          this.setState({ searchBooks: [] })
        }
      })  
    }
  }

  moveBooks = (myBook, event) =>{
    BooksAPI.update(myBook, event.target.value)
    BooksAPI.getAll().then(resp => this.setState({ shelfBooks: resp }))    
  }
  
  render() {
    return (
      <div className="app"> 

        <AllBooks 
          shelfBooks= {this.state.shelfBooks} 
          mybook={this.mybook} 
          moveBooks={this.moveBooks}  
          getallfunc={this.getallfunc}
        />
      
        <SearchBooks 
          searchBooks ={this.state.searchBooks}  
          updateBook ={this.updateBook}
          moveBooks={this.moveBooks}  
          query={this.state.query}
        />
      </div>
    )
  }
}

export default BooksApp
