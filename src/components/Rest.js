import React from 'react'
import './rest.css'
import Recentactivity from './Recentactivity'
import Alerts from './Alerts'
import Parents from './Parents'
import Calender from './Calender'
import Attendence from './Attendence'
import Message from './Message'


function Rest() {
  return (
    <div className='restmain'>
        <div>
            <Recentactivity />
            <Alerts />
        </div>

        <div>
          <Parents />
          <Calender />
        </div>

        <div> <Attendence /></div>

        <div> 
          <Message />

          
        </div>
       
        
    </div>
  )
}

export default Rest