
import React from 'react'
import { addFavourites, removeFavourite } from '../actions';

 class MovieCard extends React.Component {

  handleFavouriteClick=()=>{
        const{movie}=this.props;
     
        this.props.dispatch(addFavourites(movie));
  }
  handleUnfavouriteClick=()=>{
        const{movie}=this.props;
        this.props.dispatch(removeFavourite(movie));
  }
  render() {
    const {movie,isFavorite}=this.props
 
  

    return (
      <div className='movie-card'>
        <div className='left'>
            <img src={movie.Poster} alt="movie-poster" />
        </div>
        <div className='right'>
            <div className='title'>{movie.Title}</div>
            <div className='plot'>{movie.Plot}</div>
            <div className='footer'>
                <div className='rating' >{movie.imdbRating}</div>
                {
                  isFavorite 
                  ?  <button className='unfavourite-btn' onClick={this.handleUnfavouriteClick} >Unfavourite</button>
                  :  <button className='favourite-btn' onClick={this.handleFavouriteClick} >Favourite</button>
                }
            
            </div>
        </div>
      </div>
    )
  }
}

export default MovieCard