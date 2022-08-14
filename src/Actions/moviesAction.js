export const addMovie =(formData)=>{
    return {
        type:'ADD_MOVIE',
        payload:formData
    }

}

export const searchResult=(output)=>{
    return {
        type:'SEARCH_MOVIE',
        payload:output
    }
}

export const removeResult=(id)=>{
return {
    type:'REMOVE_RESULT',
    payload:id
}
}