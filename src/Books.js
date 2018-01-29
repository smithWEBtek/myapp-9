import React, { Component } from 'react'
import Book from './Book'
import { Library } from './Library'

class Books extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: Library,
      book: {}
    }
  }

  render() {
    let renderedBooks = (
      this.state.books.map((book, index) => {
        return (
          <div key={index}>
            <Book
              id={book.id}
              title={book.title}
              subject={book.subject} />
          </div>
        )
      })
    )

    return (
      <div>
        {renderedBooks}
      </div>
    )
  }
}

export default Books
