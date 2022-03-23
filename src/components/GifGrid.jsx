import React from 'react'
import GifGridItem from './GifGridItem';
import { useFetchGiffGrid } from './hooks/useFetchGiffGrid';

const GifGrid = ({ item }) => {

    const { infoAppi, cargando } = useFetchGiffGrid(`https://api.giphy.com/v1/gifs/search?limit=5&q=${encodeURI(item)}}&api_key=kgrAc531MPZ8U52GZD3V2nvq7kq41Od9`)



    return (
        <>
            <h2>{item}</h2>
            {cargando ? null : <h4>Cargando datos, por favor espere...</h4>}
            <div>
                {
                    infoAppi.map(({ id, title, images, url }) => (
                        <GifGridItem
                            key={id}
                            title={title}
                            images={images.downsized_medium.url}
                            url={url}
                        />
                    ))}
            </div>
        </>
    )
}

export default GifGrid