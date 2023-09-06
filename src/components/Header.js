import React, { useState, useContext } from 'react';
import Dictionarycontext from '../context/Dictionarycontext';

function Header() {
  const { loading, words, fetchWords, text, setText, error} = useContext(Dictionarycontext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      alert('Please Enter Something');
    } else {
      fetchWords(text);
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

        {words.length > 0 ? `Results for ${text}` : null}
  

        <br />
      </div>
    </>
  );
}

export default Header;
