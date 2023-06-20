
import  {ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from './actions-type'


const initialState = {
    myFavorites: [],
    allCharacters: [],
};


 const reducer = (state = initialState, {type, payload}) => {
switch (type) {
    case ADD_FAV:
        return { 
            ...state,
             myFavorites: payload,
             allCharacters: payload };
 

        case REMOVE_FAV:
            return { 
                ...state,
                 myFavorites: payload,
                 allCharacters: payload,
            }


        case FILTER:
        
        let charFiltred = state.allCharacters.filter((fav) => fav.gender === payload)

            return {
                ...state,
                myFavorites: charFiltred
            };

        case ORDER:

        let allCharactersCopy = state.allCharacters;
            return {
                ...state,
                myFavorites: payload === 'A'? allCharactersCopy.sort((a,b)=> a.id - b.id) : allCharactersCopy.sort ((a,b) => b.id - a.id)
            };


            case RESET:
                return {
                    
                }

    default:
       return {
        ...state
    }

};
 }




export default reducer;