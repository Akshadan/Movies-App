import React from 'react'
import '../index.css'
import { Formik, Form, Field } from 'formik'
import * as yup from "yup"
import  { useDispatch } from 'react-redux'
import { addMovie } from '../Actions/moviesAction'

const MoviesForm=()=>{

    const dispatch=useDispatch()
 const defaultValues={
    name:"",
    imdb:""
 }

 const validationSchema=yup.object().shape({
    name:yup.string().required("please enter your amount"),
   imdb:yup.string().required("Please enter your note")
 })
     const handleSubmit=(values)=>{
      const id =Number(new Date())
      const formData={
         id:id,
         movie:values.name,
         rating:values.imdb
      }
      console.log(formData)
      dispatch(addMovie(formData))
     }   
    return (
        <div>
         <h1 class="heading">ADD Movie</h1>
        <Formik  initialValues={defaultValues} 
       validationSchema={validationSchema}
       onSubmit={handleSubmit}>

<Form style={{  margin: 'auto',
  width: '30%',
  border: '3px solid green',
  padding: '10px'}}>
                <Field type="text" name="name" placeholder="enter the name" /><br />
                <Field type="number" name="imdb" Placeholder="enter rating" /><br />
                <button type="submit">save</button>
            </Form>
         </Formik>
        </div>
    )
}

export default MoviesForm
