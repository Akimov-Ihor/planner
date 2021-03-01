import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';
// import { Node } from 'slate';
import { editPlan, filterPlan } from '../../store/actions/planner.actions';
import { TextEditor } from '../TextEditor/TextEditor.jsx';

import './ShowPlan.css';

export const ShowPlan = ({
  isPlanOpen, currentPlan, setIsPlanOpen, userId,
  // setCurrentPlan,
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
                <span>Title:</span>
                {`${currentPlan.title}`}
              </div>
              <div className="show-plans-container-description">
                <span>
                  Description:
                </span>
                <TextEditor
                  value={value}
                  setValue={setValue}
                />
                {/* {`${currentPlan.description}`} */}
              </div>
              <div className="modal-button">
                <Button animated="vertical" onClick={closePlans}>
                  <Button.Content hidden>Close</Button.Content>
                  <Button.Content visible>
                    <Icon name="close" />
                  </Button.Content>
                </Button>
                <Button animated="vertical" onClick={() => deletePlan(currentPlan)}>
                  <Button.Content hidden>Delete</Button.Content>
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
