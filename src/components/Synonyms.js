import React, { useContext } from 'react';
import Dictionarycontext from '../context/Dictionarycontext';

function Synonyms() {
  const { loading, words } = useContext(Dictionarycontext);

  return (
    <div className='meaning'>
        <h2> Synonyms</h2>
      {words.map((wordObj, wordIndex) => (
        <div key={wordIndex}>
          {wordObj.meanings.map((meaning, meaningIndex) => (
            <ul key={meaningIndex}>
              {meaning.synonyms.map((synonym, synonymIndex) => (
                <li key={synonymIndex}>{synonym}</li>
              ))}
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Synonyms;
