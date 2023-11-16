import { Add_movies,Add_favourites, Remove_fav, Show_fav ,Add_Search_To_Movies,Add_movies_to_list} from "../actions";
import { combineReducers } from "redux";
const inititalState={
    list:[],
    favourites:[],
    showFavourite:false
}
export  function movies(state=inititalState,action)
{
switch(action.type){
    case Add_movies: return{
                                ...state,list:action.movies
                            }
    case Add_favourites:return{
                                ...state,favourites:[action.movie, ...state.favourites]
                             }
    case Remove_fav:
        const filter_array=state.favourites.filter(movie=>
            movie.Title !== action.movie.Title
        )
        return {
            ...state, favourites:filter_array
        }
    case Show_fav:return{
        ...state, showFavourite:action.val
    }
    case Add_movies_to_list:return {
        ...state, list:[action.movie, ...state.list]

    }
    default: return state;
    }
                 
}

const inititalSearch={
    result:{},
    showSearchResults:false,
}
export function search(state=inititalSearch,action){
    switch(action.type){
       case Add_Search_To_Movies:
       return{
        ...state,
        result:action.movie,
        showSearchResults:true
       }
         default: return state;             
    }
}
// const initialRootReducer={
//     movies:inititalState,
//     search:inititalSearch
// }
// export default function rootReducer(state=initialRootReducer,action){
//     return{
//         movies:state.movies,
//         search:state.search
//     }
// }
export default combineReducers({
    movies,
    search
})