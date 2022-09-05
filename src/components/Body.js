import React from 'react'
import './body.css'
import Card from './Card'
import Rest from './Rest'
import './navbar.css'
import Birthdays from './Birthdays'


function s() {
  return (
    <div className='body'>
        <div className='welcome'>
            <div>Welcome, Somebody. You are currently enrolled in 2020 - CUP - BE - CSE - 5 SEM and are Studying 7 Subjects </div>
        </div>
        <Card />

        <div className='rb'>
          <Rest />
          <Birthdays />
          
        </div>

        
        <div className='footer'> <p>  For reporting feedback / issues write to Rajinder Kumar at rajinder.kumar@chitkara.edu.in | * powered by Chalkpad Technologies Pvt.ltd* </p> </div>
    </div>
  )
}

export default s