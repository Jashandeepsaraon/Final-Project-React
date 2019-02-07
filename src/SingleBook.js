import React from 'react'

class SingleBook extends React.Component {
    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.mybook.imageLinks && this.props.mybook.imageLinks.thumbnail})`}}></div>
                        <div className="book-shelf-changer">
                            <select onChange={(event) => this.props.moveBooks(this.props.mybook, event)}>
                                <option value="move">Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.mybook.title}</div>
                    <div className="book-authors">{this.props.mybook.auothers}</div>
                </div>
            </li>
        )
    }

}
export default SingleBook