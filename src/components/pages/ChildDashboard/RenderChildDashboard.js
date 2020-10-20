import React from 'react';
import { Header } from '../../common';
import { Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import { InstructionsModal } from '../../common';
import { modalInstructions } from '../../../utils/helpers';

import adventure_passport from '../../../assets/images/child_dashboard_images/adventure_passport.svg';
import change_your_avatar from '../../../assets/images/child_dashboard_images/change_your_avatar.svg';
import trophy_room from '../../../assets/images/child_dashboard_images/trophy_room.svg';

const RenderChildDashboard = props => {
  const { push } = useHistory();

  const handleAcceptMission = e => {
    push('/child/mission-control');
  };

  return (
    <>
      <Header displayMenu={true} />
      <InstructionsModal instructions={modalInstructions.childDash} />
      <div className="dash-container">
        <Row className="toprow">
          <Col
            className="accept-mission"
            xs={24}
            sm={13}
            onClick={handleAcceptMission}
          >
            <p className="accept-mission-text">ACCEPT THE MISSION!</p>
          </Col>
          <Col className="change-avatar" xs={24} sm={11}>
            <img
              className="child-dash-img"
              src={change_your_avatar}
              alt="Change Your Avatar Button"
            />
          </Col>
        </Row>
        <Row className="bottomrow">
          <Col className="adventure-passport" xs={24} sm={11}>
            <img
              className="child-dash-img"
              src={adventure_passport}
              alt="Adventure Passport Button"
            />
          </Col>
          <Col className="trophy-room" xs={24} sm={13}>
            <img
              className="child-dash-img"
              src={trophy_room}
              alt="Trophy Room Button"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default RenderChildDashboard;
