import React from 'react'
import { Link } from 'react-router-dom'
import './Heder.css'

function Header() {
  return (
    <div>
       <div className='tabs'>
        <Link to='/' className='tab1'>Add New Person</Link>
        <Link to='/Retrieve' className='tab2'>Retrieve Information</Link>
      </div>
    </div>
  )
}

export default Header