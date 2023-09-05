import { createContext } from "react";
import { useState, useEffect } from "react";
import { useReducer } from "react";
import Dictionaryreducer from "./Dictionaryreducer";

const Dictionarycontext  = createContext()

const REACT_APP_API = process.env. REACT_APP_API


export const DictionaryProvider = ({children}) => {
    const initialState = {
      words: [],
      loading: false

    }

const[state, dispatch] =useReducer(Dictionaryreducer, initialState)


    const fetchWords = async (text) => {



      setloading()



      const url = `${REACT_APP_API}/${text}`;





        try {
          const response = await fetch(url);
          console.log(url)
          const data = await response.json();
          console.log(data);
      dispatch({
        type:'GET_WORDS',
        payload: data
      })
         
        } catch (error) {
          console.error('Error fetching data:', error);
         
        }
      };


//set loading
const setloading =() => {
  dispatch ({
    type: 'SET_LOADING'
  })
}

    
return  <Dictionarycontext.Provider value={{loading : state.loading ,words : state.words
,fetchWords,}}>

    {children}
</Dictionarycontext.Provider>

  
}

export default  Dictionarycontext