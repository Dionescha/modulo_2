import React, {useEffect, useState} from "react"
import * as ApiTmbService from '../../services/apiTmdb'



function Catalog () {
    const [popularMovies, setPopularMovies] = useState([])




    useEffect(() => {
        ApiTmbService.getPopular()
            .then((response) => setPopularMovies(response.results))

    },[])
    return <>
    <h1>Catalogo</h1>
    <div>
    <h2>Populares</h2>
    {
        popularMovies.map((popularMovies) => {
            return 
            <h5>{popularMovie.title}</h5>
        })
    }
    </div>
    </>
}



export default Catalog