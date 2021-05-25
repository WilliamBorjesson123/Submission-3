import React from 'react'
import { Routes } from './routes/Routes'
import { NavigationBar } from './components/navigationbar/NavigationBar'
import './shared/global/Global.css'

function App() {
  return (
    <Routes>
      <NavigationBar />
    </Routes>
  );
}

export default App;
