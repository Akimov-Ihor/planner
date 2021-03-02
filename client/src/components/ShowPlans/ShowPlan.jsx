import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';
// import { Node } from 'slate';
import { editPlan, filterPlan } from '../../store/actions/planner.actions';
import { TextEditor } from '../TextEditor/TextEditor.jsx';

import './ShowPlan.css';
import { constants } from '../../constants/text.constants';

export const ShowPlan = ({
  isPlanOpen, currentPlan, setIsPlanOpen, userId,
}) => {
  const dispatch = useDispatch();
  const { id, title } = currentPlan;

  const startValue = () => {
    if (Object.keys(currentPlan).length) {
      return JSON.parse(currentPlan.description).map((a) => JSON.parse(a));
    }
    return [{ children: [{ text: '.' }] }];
  };

  const [value, setValue] = useState(startValue());

  useEffect(() => {
  }, [currentPlan]);

  const closePlans = async () => {
    await editPlan({
      title, description: value, id, userId,
    })(dispatch);
    setIsPlanOpen(!isPlanOpen);
  };
  const deletePlan = async () => {
    await filterPlan({ id, userId })(dispatch);
    await closePlans();
  };

  return (
    <>
      { isPlanOpen
        ? (
          <div className="show-plans-wrapper">
            <div className="show-plans-container">
              <div>
                <span>
                  {constants.showPlan.title}
                </span>
                {`${currentPlan.title}`}
              </div>
              <div className="show-plans-container-description">
                <span>
                  {constants.showPlan.description}
                </span>
                <TextEditor
                  value={value}
                  setValue={setValue}
                />
              </div>
              <div className="modal-button">
                <Button animated="vertical" onClick={closePlans}>
                  <Button.Content hidden>
                    {constants.showPlan.close}
                  </Button.Content>
                  <Button.Content visible>
                    <Icon name="close" />
                  </Button.Content>
                </Button>
                <Button animated="vertical" onClick={() => deletePlan(currentPlan)}>
                  <Button.Content hidden>{constants.showPlan.delete}</Button.Content>
                  <Button.Content visible>
                    <Icon name="delete" />
                  </Button.Content>
                </Button>
              </div>
            </div>
          </div>
        )
        : null}
    </>
  );
};
