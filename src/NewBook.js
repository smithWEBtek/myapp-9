import React, { Component } from 'react'
import { Library } from './Library'

class NewBook extends Component {
  constructor(props) {
    super(props)

    this.state = {
      library: Library,
      book: {
        title: '',
        subject: ''
      }
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (data) => {
    let newBookData = this.state.book
    let newLibrary = [...this.state.library.concat(newBookData)]
    this.setState({ libary: newLibrary })
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="title"
          placeholder="enter_title"
          onChange={(e) => this.handleChange(e)} />
        <input
          type="text"
          name="subject"
          placeholder="enter_subject"
          onChange={(e) => this.handleChange(e)} />
        <button
          name="Submit">Submit</button>
      </form>
    )
  }
}

export default NewBook
