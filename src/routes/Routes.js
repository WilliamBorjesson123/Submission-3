import React from 'react'
import { BrowserRouter, Switch, Route, useHistory, useLocation } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import { Pokédex } from '../view/Pokédex'

export const Routes = (props) => {
    const Header = () => {
		const location = useLocation()
		const history = useHistory()

		const handleBackClick = () => {
			history.goBack()
		}

		const atPokédexPage = location.pathname === "/pokédex"
		return atPokédexPage && <button onClick={handleBackClick}>Back</button>
	}
    return (
        <BrowserRouter>
            {props.children}
            <Header />
            <Switch>
                <Route exact path="/pokédex" component={Pokédex}/>
                <Route component={HomeView} />
            </Switch>            
        </BrowserRouter>
    )
}
