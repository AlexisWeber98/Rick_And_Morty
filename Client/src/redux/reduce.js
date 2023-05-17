
import  {ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './actions-type'


const initialState = {
    myFavorites: [],
    allCharacters: [],
};


 const reducer = (state = initialState, {type, payload}) => {
switch (type) {
    case ADD_FAV:

    state.allCharacters = [...state.myFavorites]

        return {
           ...state,
           myFavorites: [...state.myFavorites, payload],
           allCharacters: [...state.allCharacters],
        };

        case REMOVE_FAV:
        return {
            ...state,
            myFavorites: state.myFavorites.filter((fav) => fav.id !== parseInt(payload))
        };

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
            }



    default:
       return {
        ...state
    }
};
 }




export default reducer;