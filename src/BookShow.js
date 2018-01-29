import React from 'react';

const BookShow = (props) => {

  let bookToShow = <h1>The clicked book should be here...</h1>

  if (props.title) {
    bookToShow = (
      <div>
        <h1>{props.title}</h1>
        <h3>{props.subject}</h3>
      </div>
    )
  }

  return (
    <div>
      {bookToShow}
    </div>
  );
};

export default BookShow;