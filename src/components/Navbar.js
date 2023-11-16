import React  from 'react'
import {handleMovieSearch,addMoviesToList} from '../actions'
import { connect} from 'react-redux';

 class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      
      searchText:''
    }
  }
   handleChange=(e)=>{
      this.setState({
        searchText:e.target.value
      })
  }
  handleAddMovies=(movie)=>{
    const {search}=this.props
    this.props.dispatch(addMoviesToList(movie));
    search.showSearchResults=false
  }
  handleSearch=()=>{
    const {searchText} =this.state;
    this.props.dispatch(handleMovieSearch(searchText));
  }

  render() {
    
    const {result:movie,showSearchResults}=this.props.search
    return (
      <div className='nav'>
        <div className='search-container'>
            <input onChange={this.handleChange}/>
            <button id='search-btn'
            onClick={this.handleSearch}
            > Search</button>

          {
            showSearchResults && 
            <div  className='search-results'>
              <div className='search-result'>
                <img src={movie.Poster} alt="search pic" />

                <div className='movie-info'>
                  <span>{movie.Title}</span>
                  <button onClick={()=>this.handleAddMovies(movie)}>
                    add to movies
                  </button>

                </div>
              </div>

            </div>
          }  

        </div>
      </div>
    )
  }
}
// class NavbarWrapper extends React.Component{
//   render(){
//     return(
//       <storeContext.Consumer>
//         {(store)=>(<Navbar dispatch={store.dispatch} search={this.props.search}/>)}
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
const connecttoAppComponent=connect(mapStateToProps)(Navbar)

export default connecttoAppComponent;
