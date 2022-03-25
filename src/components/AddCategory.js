import React, { useState } from 'react'

export const AddCategory = () => {
  
    const [inputValue, setInputValue] = useState('Hola mundo');

    const handledInputChange = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handledSubmit = (e) => {
        e.preventDefault(); 
        console.log("submit hecho");
        
    }

    return (
    <form onSubmit={ handledSubmit }>
        <input type="text" value={ inputValue } onChange={ handledInputChange }/>
    </form>
  )
}
