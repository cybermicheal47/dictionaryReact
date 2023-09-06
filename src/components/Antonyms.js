import React, { useContext } from 'react';
import Dictionarycontext from '../context/Dictionarycontext';

function Antonyms() {
  const { loading, words } = useContext(Dictionarycontext);


  const antonyms = words.map((wordObj) =>
  wordObj.meanings.map((meaning) =>
    meaning.antonyms.map((antonym, antonymIndex) => (
      <li key={antonymIndex}>{antonym}</li>
      ))
      )
    );

    const displayh2 = antonyms.some((antonym) => antonym.length > 0);
 
 
 

  return (
    <div className='meaning'>
        {displayh2 && <h2> Antonyms</h2>}
        
      {antonyms}

    </div>
  );
}

export default Antonyms;
