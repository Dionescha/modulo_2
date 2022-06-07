import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { TextField, Button } from '@mui/material';

function Example() {
  const [temp, setTemp] = useState('');
  const [weather, setWeather] = useState();
    useEffect(() => {
    axios.get('https://goweather.herokuapp.com/weather/Curitiba')

    .then((response) =>{
        setTemp(response.data.temperature)
        setWeather(response.data)
    })
  },[]);
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: search, 
     
  });
  const {handleChange, values, handleSubmit} = formik
  const {email} = values

  function search(values) {
    alert(JSON.stringify(values, null, 2));

  }
  
  return (
    <form onSubmit={handleSubmit}>
    
    
    <TextField
    id="email"
    name="email"
    type="email"
    onChange={handleChange}
    value={email}
     />
    <Button
     type="submit"
     variant="contained"
     >Submit</Button>
  </form>
  );
}











function Home() {
    return <h1>Home</h1>
}



export function Teste() {
    return <h1>Teste</h1>
}

export default Example;
