const moviesInitialState =[]

const moviesReducer =(state = moviesInitialState, action)=>{
    switch(action.type){
      case 'ADD_MOVIE':{
          return [...state, {...action.payload}]
      }
      case 'SERACH_MOVIE':{
        return [{ ...action.payload}]
      }

      case 'REMOVE_RESULT':{
        
          return state.filter((e)=>{
           return e.id!==action.payload
          })
        //   return state.filter((ele)=>{
        //     return ele.id !== action.payload
        // })
          
      
      }
        default:{
             return [...state]
        }
    }
}

export default moviesReducer