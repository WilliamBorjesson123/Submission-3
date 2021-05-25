import React, { useState } from 'react'
import PokeAPIService from '../shared/api/service/PokeAPIService'
import { useLocation } from 'react-router-dom'


export const HomeView = () => {
    const location = useLocation()
    const [data, setData] = useState()
    const [search, setSearch] = useState("")
    

    const dataFromAPI = () =>{
        PokeAPIService.searchForPokemon(search.toLowerCase())
        .then((response) => setData(response.data))
        .catch((error) => console.log (error))
    }

    const displayData = () => {
        if(data) {
            return <div>
                <h3>name: {data.name}</h3>
                <h3>id: {data.id}</h3>
                <h3>type: {data.types?.[0]?.type.name}</h3>
                <h3>weight: {data.weight}</h3>
                <h3>height: {data.height}</h3>
            </div>
        }
    }



    return (
        <div>
            <span>Search for Pokémon</span>
            <input onChange={(event) => setSearch(event.target.value)}/>
            <br/>
            <br/>
            <button onClick={() => dataFromAPI()}>Search</button>
            <h1>{location.state?.name}</h1>
            {displayData()}
        </div>
    )
}
