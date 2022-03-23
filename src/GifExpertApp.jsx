import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(
        []
    )
    console.log(categorias)
    return (
        <>
            <h2>
                Gif Expert App
            </h2>

            <AddCategory
                categorias={categorias}
                setCategorias={setCategorias}
            />

            <hr />

            {
                categorias.map((item,i) => (
                    <GifGrid
                    key={i}
                    item={item}
                    categorias={categorias} />
                ))
            }
        </>
    )
}

export default GifExpertApp