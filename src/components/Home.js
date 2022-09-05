import React from 'react'
import './home.css'
import Header from './Header'
import NavBar from './NavBar'
import Body from './Body'

function Home() {
  return (
    <div className='home'>
        <Header />
        <NavBar />

        <div className='dashbord'> 
          <div>Home -- Dashbord</div>
          <input type="text" placeholder='Menu Lookup..' />
        </div>
        
        <Body />
       
        
    </div>
  )
}

export default Home