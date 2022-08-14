import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import MoviesList from './MoviesList'
import { searchResult } from '../Actions/moviesAction'

const MoviesCard1=(props)=>{
const { movies}= props
console.log('outmovie', movies)

const [movie, setMovie]=useState('')
const [movieOrder, setMovieOrder]= useState('')

const dispatch=useDispatch()

const handleMovie=(e)=>{
const input=e.target.value
setMovie(input)
console.log(movie)
}

const filteresOutput=movies.filter((e)=>{
    return e.movie.includes(movie)
})



 const handleOrder=(e)=>{
    let inputvalue=e.target.value
   setMovieOrder(e.target.value)

 console.log('movieOrder',movieOrder)

movies.sort((a,b)=>{
    if(inputvalue === 'ascending'){
         if(a.movie.toLowerCase() < b.movie.toLowerCase()){
             return -1
         }
     }else if(inputvalue === 'descending'){
         if(b.movie.toLowerCase() < a.movie.toLowerCase()){
             return -1
         }
     }else if(inputvalue === 'High'){
        return b.rating - a.rating
     }else if(inputvalue === 'Low'){
         return a.rating - b.rating
     }else{
         return 0
     }
    
 })
}

 
    return (
        <div>
        <form >

        
                <input  type="text" value={movie} onChange={handleMovie} placeholder="search by movie" /> <br />

                <select value={movieOrder} onChange={handleOrder} >
               
  <option >Order By</option>
 <option value="ascending">A-Z</option>
 <option value="descending">Z-A</option>
 <option value="High">High to Low</option>
 <option value="Low">Low to High</option>

               </select>
  
            </form>
            <MoviesList filteresOutput={filteresOutput} />
        </div>
    )
}

export default MoviesCard1