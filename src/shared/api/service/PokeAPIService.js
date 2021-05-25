import http from '../PokeAPI'

const searchForPokemon = (userSearch) => {
    return http.get(`/pokemon/${userSearch}`)
}

const getAllCharacter = () => {
	return http.get('/pokemon?limit=1118')
}


export default {
    searchForPokemon, getAllCharacter
}