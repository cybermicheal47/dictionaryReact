import React, { useEffect,useContext } from 'react';
import Loading from './Loading';
import  Dictionarycontext  from '../context/Dictionarycontext';
import Example from './Example';
import Synonyms from './Synonyms';
import Antonyms from './Antonyms';

function Meaning() {
  const {loading,words,fetchWords} = useContext(Dictionarycontext)
  

 

 

  return (
    <div>
      

       <div className='meaning'>
          <h1>Meaning And Definitions</h1>
       
      
        <ul  >
         
          <br/>
          {words.map((wordObj, index) => (
            <li key={index}>
             
              
           
              <ul>
                {wordObj.meanings.map((meaning, meaningIndex) => (
                  <li key={meaningIndex}>
                   
                    <ul>
                      {meaning.definitions.map((definition, defIndex) => (
                        <li key={defIndex}>
                           {definition.definition}
                       

                          
                        </li>

                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
       
        </div>
    

     
    </div>
  );
}

export default Meaning;
