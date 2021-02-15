import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react'
import { filter_Plann} from '../../store/actionCreators/plannerCreators';
import './ShowPlans.css'

const ShowPlans = ({ isPlansOpen, currentPlans, setIsPlansOpen }) => {
  const closePlans = () => setIsPlansOpen(!isPlansOpen)
  const dispatch = useDispatch()
  const planns = useSelector(state=> state.planns)
  const plannsCopy =[...planns]
  

  const deltePlann = (obj) => {
   const newPlanns = plannsCopy.filter(planns => planns.id !== obj.id)
   dispatch(filter_Plann(newPlanns))
   closePlans()
  }

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
              <Button animated='vertical' onClick={() => deltePlann(currentPlans)}>
                <Button.Content hidden>Delete</Button.Content>
                <Button.Content visible>
                  <Icon name='delete' />
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