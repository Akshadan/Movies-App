import React from 'react'
import MoviesCard1 from './MovieCard1'
import img1 from '../images/img.jpg'
import img2 from '../images/delete-24.jpg'
import '../index.css'
import { removeResult } from '../Actions/moviesAction'

import { useDispatch } from 'react-redux'
import { removeMovie } from '../Actions/moviesAction'


const MoviesList=(props)=>{
const { filteresOutput }=props
console.log('filteresOutput',filteresOutput)
const dispatch=useDispatch()
  
const handleRemove=(id)=>{
    dispatch(removeResult(id))
}


    return (
        <div >
               {/* <img src={img} width="10%" height="30%"/> */}
            
           {
            
            filteresOutput.map((e)=>{
                
                return(
                    <div className='card'>
                  <img src={img1} width="10%" height="30%"/>
                <li >{e.movie}-{e.rating}</li> <img src={img2}  class="center" width="5%" height="6%" alt="" onClick={()=>{handleRemove(e.id)}}/>
                
                </div>
                )
            })
           }
        </div>
    )
}

export default MoviesList