import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input, TextArea, Form, Button, Icon } from 'semantic-ui-react'
import {set_Plann} from '../../store/actionCreators/plannerCreators'
import './Modal.css'
import { getDateInSec } from '../utils/date-moment';

const Modal = ({ isOpen, setIsOpen, selectDate }) => {
  const openCloseModal = () => setIsOpen(!isOpen)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  
 
  const dispatch = useDispatch()
  const sentData = () => {
    dispatch(set_Plann({
      title,
      description,
      date: selectDate.toString(),
      id: getDateInSec(selectDate)+title
    }))
    setTitle('')
    setDescription('')
    openCloseModal()
  }
  

  return (
    <>
      { isOpen ?
        <div className='modal-container'>

          <div>
            <Form>
              <div className='modal-title-close'>
                <Input
                  icon='users'
                  iconPosition='left'
                  placeholder='Title'
                  onChange={e => setTitle(() => e.target.value)} value={title}
                />

                <Button animated='vertical' onClick={() => openCloseModal()}>
                  <Button.Content hidden>Close</Button.Content>
                  <Button.Content visible>
                    <Icon name='close' />
                  </Button.Content>
                </Button>
              </div>
              <div className='modal-textarea' >
                <TextArea
                  placeholder='Tell us more'
                  onChange={e => setDescription(() => e.target.value)}
                  value={description} />
              </div>
              <div className='modal-button'>
                <Button animated='vertical' onClick={() => sentData()}>
                  <Button.Content hidden>Add</Button.Content>
                  <Button.Content visible>
                    <Icon name='add' />
                  </Button.Content>
                </Button>
              </div>
            </Form>
          </div>


        </div>

        : null
      }
    </>
  )
}
export default Modal