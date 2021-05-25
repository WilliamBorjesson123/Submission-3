import React from 'react'
import PokemonAPIservice from '../shared/api/service/PokeAPIService'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'

export const Pokédex = () => {
    const [serverData, setServerData] = useState([])
	const history = useHistory()

	const fetchData = async () => {
		const {data} = await PokemonAPIservice.getAllCharacter()
		setServerData(data)
	}

	useEffect(() => {
		fetchData()
	}, [])

	const displayData = () => {
		return (
			serverData.results?.map((x, i) =>
				<div key={x.name}>
					<h1 onClick={() => history.push(RoutingPath.homeView, x)}>{i} {x.name}</h1>
				</div>
			)
		)
	}


	return (
		<div>
			{displayData()}
		</div>
	)
}
