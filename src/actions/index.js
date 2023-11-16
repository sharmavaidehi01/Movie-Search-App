// {
//     type:'Add_Movies',
//     movies:[m1,m2,m3]
// }


export const Add_movies='Add_movies'
export const Add_favourites='Add_favourites'
export const Remove_fav='Remove_fav'
export const Show_fav='Show_fav'
export const Add_movies_to_list='Add_movies_to_list'
export const Add_Search_To_Movies='Add_Search_To_Movies'

export const addMovies=function(data){
    return {
        type:Add_movies,
        movies:data
    }
}
export const addFavourites=function(movie){
    return {
        type:Add_favourites,
        movie:movie
    }
}
export const removeFavourite=function(movie){
    return {
        type:Remove_fav,
        movie:movie
    }
}
export const showFavourite=function(val){
    return {
        type:Show_fav,
        val
    }
}
export function addMoviesToList(movie){
    return {
        type:Add_movies_to_list,
        movie
    }
}

export function handleMovieSearch(movie){
        const url=`https://www.omdbapi.com/?apikey=192215bc&t=${movie}`;
        return function(dispatch){
        fetch(url)
        .then(Response=>{Response.json()
            .then(movie=>{
                console.log(movie)


                //dispatch an action 
                dispatch(addSearchToMovies(movie));
            })
        })
    }
}
export function addSearchToMovies(movie){
    return {
        type:Add_Search_To_Movies,
        movie
    }
}