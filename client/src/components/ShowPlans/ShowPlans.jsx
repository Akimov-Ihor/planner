import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';
import { filterPlan } from '../../store/actionCreators/plannerCreators';
import './ShowPlans.css';

export const ShowPlans = ({
  isPlansOpen, currentPlans, setIsPlansOpen, userId,
}) => {
  const closePlans = () => setIsPlansOpen(!isPlansOpen);
  const dispatch = useDispatch();
  // const plansList = useSelector((state) => state.plansList);
  // const plannsCopy = [...plansList];

  const deletePlan = async () => {
    // const id = plannsCopy.find(() => currentPlans.id);
    // eslint-disable-next-line prefer-destructuring
    const id = currentPlans.id;
    // console.log(currentPlans, id);
    // console.log(currentPlans.id);
    await filterPlan({ id, userId })(dispatch);
    closePlans();
  };

  return (
    <>
      { isPlansOpen
        ? (
          <div className="show-plans-wrapper">
            <div className="show-plans-container">
              <div>
                <span>Title:</span>
                {`${currentPlans.title}`}
              </div>

              <div className="show-plans-container-description">
                <span>
                  Description:
                </span>
                {`${currentPlans.description}`}
              </div>

              <div className="modal-button">
                <Button animated="vertical" onClick={() => closePlans()}>
                  <Button.Content hidden>Close</Button.Content>
                  <Button.Content visible>
                    <Icon name="close" />
                  </Button.Content>
                </Button>
                <Button animated="vertical" onClick={() => deletePlan(currentPlans)}>
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
