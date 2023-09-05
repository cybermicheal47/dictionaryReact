import React, { useEffect, useContext } from 'react';
import Loading from './Loading';
import Dictionarycontext from '../context/Dictionarycontext';

function Example() {
  const { loading, words, fetchWords } = useContext(Dictionarycontext);

 
  return (
    <div>
      
        <div className='meaning'>
          <h1>Examples</h1>

          {words.map((wordObj, index) => (
            <div key={index}>
              {wordObj.meanings.map((meaning, meaningIndex) => (
                <div key={meaningIndex}>
                  {meaning.definitions.map((definition, defIndex) => (
                    <div key={defIndex}>
                      {definition.example && (
                        <ul>
                          <li>{definition.example}</li>
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
   
    </div>
  );
}

export default Example;
