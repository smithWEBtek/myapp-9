import React, { Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

class Book extends Component {
  state = {
    count: 0
  }

  incrementCount = (id) => {
    let currentCount = this.state.count
    this.setState({
      count: currentCount + 1
    })
  }

  render() {
    let book = (
      <div className="Center">
        <h4>{this.props.title}</h4>
        <p>{this.props.subject}</p>
        <button
          type="button"
          name="count"
          value={this.state.count}
          onClick={() => this.incrementCount()}>{this.state.count}</button>
        <h5>
          <Link to={`/books/${this.props.id}`}>Show me that book!</Link></h5>
      </div >
    )

    return (
      <div>
        {book}
      </div>
    )
  }
}

export default Book