import React, { useState } from 'react';
import { Input, TextArea, Form, Button, Icon } from 'semantic-ui-react'
import './Modal.css'

const Modal = ({ isOpen, setIsOpen, setModalDate,selectDate }) => {
  const openCloseModal = () => setIsOpen(!isOpen)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
 

  const sentData = () => {
    setModalDate({
      title,
      description,
      date:selectDate.toString()
    })
    setTitle('')
    setDescription('') 
    openCloseModal()
  }
  console.log(selectDate)

  return (
    <>
      { isOpen ?
        <div className='modal-container'>

          <div>
            <Form>
              <div>
                <Button animated='vertical' onClick={() => openCloseModal()}>
                  <Button.Content hidden>Close</Button.Content>
                  <Button.Content visible>
                    <Icon name='close' />
                  </Button.Content>
                </Button>
              </div>
              <div>
                <Input
                  icon='users'
                  iconPosition='left'
                  placeholder='Title'
                  onChange={e => setTitle(() => e.target.value)} value={title} />
              </div>
              <div >
                <TextArea
                  placeholder='Tell us more'
                  onChange={e => setDescription(() => e.target.value)}
                  value={description} />
              </div>
              <div>
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