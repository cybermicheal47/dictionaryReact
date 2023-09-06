const Dictionaryreducer = (state, action) =>{
    switch(action.type){
     case 'GET_WORDS' :
     return {
        ...state,
        words : action.payload,
        loading: false,
     }
    case 'SET_LOADING' :
        return{
            ...state,
            loading: true 
        }

    case 'Fetch_Error' :
        return  {
            loading: false,
            words: [],
            error: 'No Definition Found'
        }
        default : 
        return state
    }
}

export default Dictionaryreducer