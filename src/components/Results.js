
import Meaning from './Meaning'
import Example from './Example'
import Synonyms from './Synonyms'
import Antonyms from './Antonyms'
import React, { useEffect,useContext } from 'react';
import Loading from './Loading';
import  Dictionarycontext  from '../context/Dictionarycontext';

function Results() {
    const {loading,words,fetchWords} = useContext(Dictionarycontext)
    useEffect(() => {
        fetchWords();
      }, []);



  return (
    <div>
      
{ loading ? (
    <Loading />
) : (


<>
      <Meaning/>
      <Example />
      <Synonyms />
      <Antonyms />
      </>
)
}
    </div>
  )
}

export default Results
