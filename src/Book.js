import React from 'react';
import './App.css'

const Book = (props) => {
  return (
    <div className="Center">
      <h4>Title: {props.title}</h4>
      <h4>Image: {props.img}</h4>
      <button
        onClick={props.incrementCount()}>Count+</button>
    </div>
  );
};

export default Book;