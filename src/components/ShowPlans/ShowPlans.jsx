import React from 'react';
import './ShowPlans.css'

const ShowPlans = ({title,description}) =>{
  return (
    <div className='show-plans-container'>
      <div>Title {`${title}`}</div>
      <div>Description: {`${description}`}</div>
    </div>
  )

}

export default ShowPlans