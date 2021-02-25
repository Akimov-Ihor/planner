import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';
import { filterPlan } from '../../store/actions/planner.actions';
import './ShowPlan.css';

export const ShowPlan = ({
  isPlanOpen, currentPlan, setIsPlanOpen, userId,
}) => {
  const closePlans = () => setIsPlanOpen(!isPlanOpen);
  const dispatch = useDispatch();

  const deletePlan = async () => {
    const { id } = currentPlan;
    await filterPlan({ id, userId })(dispatch);
    closePlans();
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
                {`${currentPlan.description}`}
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
