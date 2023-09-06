import React, { useEffect, useContext } from 'react';
import Loading from './Loading';
import Dictionarycontext from '../context/Dictionarycontext';
import Meaning from './Meaning';
import Example from './Example';
import Synonyms from './Synonyms';
import Antonyms from './Antonyms';
import Header from './Header';

function Results() {
  const { loading, words, fetchWords, text, error } = useContext(Dictionarycontext);

  useEffect(() => {
    if (text.length > 0) {
      fetchWords();
    }
  }, []);

  return (
    <div>
 <Header />


      {loading ? (
        <Loading />
      ) : words.length > 0 ? (
        <>
          <Meaning />
          <Example />
          <Synonyms />
          <Antonyms />
        </>
      ) : error ? ( // Check for error
        <p className="meaning">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default Results;
