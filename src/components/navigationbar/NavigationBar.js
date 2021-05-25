import React from 'react'
import './NavigationBar.css'
import Logo from '../../shared/images/logo.svg'
import { useHistory } from 'react-router-dom'

export const NavigationBar = () => {
    const history = useHistory()

    return (
        <div className="navigationBarContainer">
            <img onClick={() => history.push('/')} 
            className="logo" 
            src={Logo} alt="Error..." />
            <span onClick={() => history.push('/pokédex')}
            className="pokédex">Pokédex </span>
        </div>
    )
}
