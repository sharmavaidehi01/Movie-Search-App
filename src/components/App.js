import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { data } from "../data";
import { addMovies, showFavourite } from "../actions";
import { connect } from "react-redux";


class App extends React.Component {

componentDidMount(){
  const {dispatch}=this.props
  //make api call
  //dispatch action
  dispatch(addMovies(data))
  
}
isMovieFavourite=(movie=>{
  const {movies}=this.props
  const index=movies.favourites.indexOf(movie);
  if(index!==-1)
  {
    return true;
  }
  else{
    return false;
  }
})

onChangeTab=(val)=>{
      this.props.dispatch(showFavourite(val))
}


render(){
 
  const { list, favourites,showFavourite} =this.props.movies;
  const {search}=this.props
  const displayMovie=showFavourite?favourites:list;
  console.log(this.props)

  
  return (
    <div className="App">
       <Navbar
       dispatch={this.props.dispatch} 
       search={search}
       />
       <div className="main">
          <div className="tabs">
            <div className={ `tab ${showFavourite ? '':'active-tabs'}`} onClick={()=>{this.onChangeTab(false)}}>Movies</div>
            <div className={ `tab ${showFavourite ?'active-tabs':''}`} onClick={()=>{this.onChangeTab(true)}}> Favourites</div>

          </div>
          <div className="List">
          {displayMovie.map((content,index) => (
             <MovieCard 
             movie={content}
              key={`movie-${index}`} 
              dispatch={this.props.dispatch}  
              isFavorite={this.isMovieFavourite(content)}    
              />
          ))}
          </div>
          {
            displayMovie.length===0 ? <div className="no-movies">Add movies to Favourite</div> :null
          }
       </div>
    </div>
  );
}
}
// class AppWraper extends React.Component{
//   render(){
//     return (
//       <storeContext.Consumer>
//         {(store)=>(<App store={store} />)}
//       </storeContext.Consumer>
//     )
//   }
// }
function mapStateToProps(state){
  return{
    movies:state.movies,
    search:state.search
  }
}
const connecttoAppComponent=connect(mapStateToProps)(App)

export default connecttoAppComponent;
