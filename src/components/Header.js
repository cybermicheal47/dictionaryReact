import React, { useState, useContext } from 'react';
import Dictionarycontext from '../context/Dictionarycontext';

function Header() {
  const [text, setText] = useState(''); // Initialize text with an empty string

  const { loading, words, fetchWords } = useContext(Dictionarycontext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      alert('Please Enter Something');
    } else {
      fetchWords(text);
      setText(''); // Clear the input field after submitting
    }
  };

  return (
    <>
      <div className="container">
        <br />
        <h2>Dictionary</h2>
        <h4>A great place to find definitions of words</h4>
        <br />
        <form className="search" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            name="search"
            value={text} // Bind input value to the text state
            onChange={handleChange} // Update text state on input change
          />
          <button type="submit" className="btnsearch">
            Search
          </button>
        </form>
        <br />
      </div>
    </>
  );
}

export default Header;
