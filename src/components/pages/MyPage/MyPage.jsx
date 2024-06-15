import { useState } from 'react';
import { styled } from 'styled-components';
import { Row, Col, Wrap, Title, Header1, Header2 } from '../../atomic';

import ProfileImgURL from '../../../assets/profile-img-sample.png';
import ProfileBackgroundURL from '../../../assets/profile-background-sample.png';
import ProgressAll from '../../../assets/ProgressAll.svg?react';
import ProgressPart from '../../../assets/ProgressPart.svg?react';

import { ProfileBackground, MyPageContainer, ProfileImg, ProfileContainer, InfoItemContainer } from './style';
import { GroupList } from '../../common/GroupList';
import { sampleGroupListData } from './sampleGroupListData';

function InfoItem({ title, value, children }) {
  return (
    <InfoItemContainer>
      <Header2>{title}</Header2>
      <Row>
        <Title>{value}</Title>
        {children}
      </Row>
    </InfoItemContainer>
  );
}

export function MyPage() {
  const [userName, setUserName] = useState('ian0704');
  const [profileImgURL, setProfileImgURL] = useState(ProfileImgURL);
  const [profileBackgroundURL, setProfileBackgroundURL] = useState(ProfileBackgroundURL);
  const [activityLevel, setActivityLevel] = useState(3);
  const [groupCnt, setGroupCnt] = useState(4);
  return (
    <MyPageContainer>
      <ProfileBackground url={profileBackgroundURL} />
      <ProfileContainer>
        <Col>
          <Col>
            <ProfileImg url={profileImgURL} />
            <Header1>{userName}</Header1>
          </Col>
          <Row>
            <InfoItem title={'활동 지수'} value={activityLevel}>
              <ProgressAll style={{ position: 'absolute' }} />
              <ProgressPart style={{ position: 'absolute' }} />
            </InfoItem>
            <InfoItem title={'그룹 수'} value={groupCnt}></InfoItem>
          </Row>
        </Col>
        <Col>
          <Header1>나의 그룹</Header1>
          <GroupList groupListData={sampleGroupListData} colNum={3} />
        </Col>
        <Col>
          <Header1>관심 있는 그룹</Header1>
          <GroupList groupListData={sampleGroupListData} colNum={3} />
        </Col>
      </ProfileContainer>
    </MyPageContainer>
  );
}
