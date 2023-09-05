import React, { useContext } from 'react';
import Dictionarycontext from '../context/Dictionarycontext';

function Antonyms() {
  const { loading, words } = useContext(Dictionarycontext);

  return (
    <div className='meaning'>
        <h2>  Antonyms</h2>
      {words.map((wordObj, wordIndex) => (
        <div key={wordIndex}>
          {wordObj.meanings.map((meaning, meaningIndex) => (
            <ul key={meaningIndex}>
              {meaning.antonyms.map((synonym, synonymIndex) => (
                <li key={synonymIndex}>{synonym}</li>
              ))}
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Antonyms;
