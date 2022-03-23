import React, { useState } from 'react'

const AddCategory = ({categorias, setCategorias}) => {
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim()){
            setCategorias([ inputValue, ...categorias])
            setInputValue('')
        } else{
            return alert('campo vacio')
        }
    }
    return (
        <>
            <h2>
                Add Category
            </h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </>
    )
}


export default AddCategory


