import React, {useEffect, useState} from "react"
import * as ApiTmbService from '../../services/apiTmdb'



function Catalog () {
    const [popularMovies, setPopularMovies] = useState([])

    const imgUrl = 'https://image.tmdb.org/t/p/w300'




    useEffect(() => {
        ApiTmbService.getPopular()
            .then((response) => setPopularMovies(response.results))

    },[])
    return <>
    <h1 >Catalogo</h1>
    <div className="categoria">
    <h2 className="categoria-titulo">Populares</h2>
    <div className="categoria-lista">

   {
        popularMovies.map((popularMovie) => {
            return <>
            <img src={imgUrl + popularMovie.poster_path} alt={popularMovie.title} />
            </>
        })
    }
        </div>
    </div>
    </>
}



export default Catalog