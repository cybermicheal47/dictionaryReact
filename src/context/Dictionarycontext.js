import { createContext } from "react";
import { useState, useEffect, useReducer } from "react";
import Dictionaryreducer from "./Dictionaryreducer";

const Dictionarycontext = createContext();

const REACT_APP_API = process.env.REACT_APP_API; // Correct the environment variable name

export const DictionaryProvider = ({ children }) => {
  const initialState = {
    words: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(Dictionaryreducer, initialState);

  const [text, setText] = useState([]);
  const [errormsg, seterrormsg] =useState(null)

  // Define setloading function before using it in fetchWords
  const setloading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };

  const fetchWords = async (text) => {
    setloading(); // Call setloading here

    const url = `${REACT_APP_API}/${text}`;

    try {
      const response = await fetch(url);
      console.log(url);
      if (response.status === 404) {
        throw new Error('Word not found'); // Handle 404 error here
      }
      const data = await response.json();
               
      console.log(data);
      dispatch({
        type: "GET_WORDS",
        payload: data,
      });

    
    } catch (error) {
      console.error("Error fetching data:", error);
      dispatch ({type: 'Fetch_Error'})

    }
  };

  return (
    <Dictionarycontext.Provider
      value={{ loading: state.loading, words: state.words, fetchWords, text, setText , error: state.error}}
    >
      {children}
    </Dictionarycontext.Provider>
  );
};

export default Dictionarycontext;
