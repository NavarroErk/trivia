import React, { use } from 'react'
import { useLocation } from 'react-router-dom'

function Lobby() {
    const location = useLocation()
    const { from } = location.state

    alert()    
  return (
    <div>Lobby</div>
  )
}

export default Lobby