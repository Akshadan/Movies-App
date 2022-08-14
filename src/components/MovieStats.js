import React from 'react'
import { useSelector } from 'react-redux'
import MoviesCard from './MovieCard'
import MoviesCard1 from './MovieCard1'
import MoviesList from './MoviesList'
// import '../index.css'

const MoviesStats=()=>{

    const movies=useSelector((state)=>{
        return state.movies
    })
    return (
        <div>
            <h2 class="heading">Movie Stats</h2>
            <h2 class="subject">Total Movies-{movies.length}</h2>
            {/* <MoviesList   movies={movies}/> */}
            <MoviesCard1 movies={movies} />
            
        </div>
    )
}

export default MoviesStats