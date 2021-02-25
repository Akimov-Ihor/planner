import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Input, TextArea, Form, Button, Icon,
} from 'semantic-ui-react';

import { setPlan } from '../../store/actions/planner.actions';
import { constants } from '../../constants/text.constants';

import './Modal.css';

export const Modal = ({
  isOpen, setIsOpen, selectDate, userId,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  const openCloseModal = () => setIsOpen(!isOpen);

  const sentData = async () => {
    await setPlan({
      title, description, selectDate, userId,
    })(dispatch);
    setTitle('');
    setDescription('');
    return openCloseModal();
  };

  return (
    <>
      { isOpen
        ? (
          <div className="modal-container">
            <div>
              <Form>
                <div className="modal-title-close">
                  <Input
                    icon="users"
                    iconPosition="left"
                    placeholder="Title"
                    onChange={(e) => setTitle(() => e.target.value)}
                    value={title}
                  />

                  <Button animated="vertical" onClick={openCloseModal}>
                    <Button.Content hidden>{constants.modal.close}</Button.Content>
                    <Button.Content visible>
                      <Icon name="close" />
                    </Button.Content>
                  </Button>
                </div>
                <div className="modal-textarea">
                  <TextArea
                    placeholder="Tell us more"
                    onChange={(e) => setDescription(() => e.target.value)}
                    value={description}
                  />
                </div>
                <div className="modal-button">
                  <Button
                    animated="vertical"
                    disabled={(title === '' || description === '')}
                    onClick={sentData}
                  >
                    <Button.Content hidden>{constants.modal.add}</Button.Content>
                    <Button.Content visible>
                      <Icon name="add" />
                    </Button.Content>
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        ) : null}
    </>
  );
};
