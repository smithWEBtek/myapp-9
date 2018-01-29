import React, { Component } from 'react'
import Book from './Book'

class Books extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books:
        [{ title: 'my bike', img: 'asdf' },
        { title: 'our dog', img: 'zxcv' },
        { title: 'the cat', img: 'qwer' }],
      book: {}
    }
  }

  incrementCount = (id) => {

    // let clickedBook = this.state.books.filter(book => book.id === id)[0]
    // this.setState({
    //   book: clickedBook
    // })
  }

  render() {
    let renderedBooks = (
      this.state.books.map((book, index) => {
        return (
          <div key={index}>
            <Book
              title={book.title}
              image={book.img}
              incrementCount={(id) => this.incrementCount(id)} />
          </div >
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
