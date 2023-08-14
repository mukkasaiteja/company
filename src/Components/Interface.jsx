import React from 'react'
import Table from './Table'
import Header from './Header'




function Interface({del}) {    
  return (
    <div>
      <div className='main'>
      <div>
      <Header/>
      </div >
      <div style={{border:'1px solid black',height:"300px"}}>
        <h4 className='add'>Add New Person</h4>
        <div> 
          <Table/>
        </div>
        <div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Interface