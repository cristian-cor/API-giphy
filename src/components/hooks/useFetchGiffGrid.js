import { useEffect, useState } from "react";

export const useFetchGiffGrid = (urlApi) => {


    const [api, setApi] = useState({
        infoAppi : [],
        cargando : false
    })

    useEffect(() => {
        fetch(urlApi)
            .then(response => response.json())
            .then(data =>
                    setApi({
                        infoAppi: data.data,
                        cargando: true
            }
            )
            );
    }, [urlApi])

    return api
}
