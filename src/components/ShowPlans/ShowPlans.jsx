import React from 'react';
import { Button, Icon } from 'semantic-ui-react'
import './ShowPlans.css'

const ShowPlans = ({ isPlansOpen, currentPlans, setIsPlansOpen }) => {
  const closePlans = () => console.log(setIsPlansOpen(!isPlansOpen))

  return (
    <>
      { isPlansOpen ?
        <div className='show-plans-wrapper'>
          <div className='show-plans-container'>
            <div>
              <span>Title:</span>
              {`${currentPlans.title}`}
            </div >

            <div className='show-plans-container-description' >
              <span>
                Description:
              </span>
              {`${currentPlans.description}`}
            </div>

            <div className='modal-button'>
              <Button animated='vertical' onClick={() => closePlans()}>
                <Button.Content hidden>Close</Button.Content>
                <Button.Content visible>
                  <Icon name='close' />
                </Button.Content>
              </Button>
            </div>

          </div >
        </div>
        : null}
    </>
  )

}

export default ShowPlans