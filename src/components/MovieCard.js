// import React from 'react'
// import { Formik, Form, Field } from 'formik'
// import * as yup from "yup"
// import { addMovie } from '../Actions/moviesAction'
// import { useDispatch } from 'react-redux'
// import MoviesList from './MoviesList'
// import { searchResult } from '../Actions/moviesAction'

// const MoviesCard=(props)=>{
// const { movies}= props
// console.log(movies)
//     const defaultValues={
       
//         movie: "",
//         movieOrder: "",
       
//     }
// const dispatch=useDispatch()
    

//     const validationSchema=yup.object().shape({
//         movie:yup.string().required("please enter your movie"),
       
//         movieOrder:yup.string().required('please select movieOrder')
           
//         })

//         const handleSubmit=(values)=>{
//         //  const output=movies.filter((e)=>{
//         //     return e.movie==values.movie
//      console.log(values)
//         //  })
//         //  dispatch(searchResult(output))
       

//         }
    
//     return (
//         <div>
//            <Formik  initialValues={defaultValues} 
//        validationSchema={validationSchema}
//        onSubmit={handleSubmit}>

//                 <Form>
//                 <Field  type="text" name="movie" placeholder="search by movie" /> <br />
//                 <Field component="select"name="movieOrder">
//                  <option value="">order by</option>
//                 <option value="expense">A-z</option>
//                 <option value="expense">z-A</option>
//                 <option value="expense">1-10</option>
//                 <option value="expense">10-1</option>
             

//             </Field> <br />
            
            
//                 </Form>
//             </Formik>
//             <MoviesList  output={output} />
//         </div>
//     )
// }

// export default MoviesCard