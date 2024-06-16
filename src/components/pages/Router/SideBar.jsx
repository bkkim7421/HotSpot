import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { Row, Col, Title, Header3 } from '../../atomic';

import Home from '../../../assets/Home.svg?react';
import Logout from '../../../assets/Logout.svg?react';
import Notification from '../../../assets/Notification.svg?react';
import Person from '../../../assets/Person.svg?react';
import Search from '../../../assets/Search.svg?react';
import Settings from '../../../assets/Settings.svg?react';

export function SideBar() {
  return (
    <SideBarContainer>
      <OptionLink to='/'>
        <Title>HotSpot</Title>
      </OptionLink>
      <OptionContainer>
        <OptionLink to='/'>
          <Option>
            <Home />
            <Header3>홈</Header3>
          </Option>
        </OptionLink>
        <OptionLink to='/searchgroup'>
          <Option>
            <Search />
            <Header3>그룹 검색</Header3>
          </Option>
        </OptionLink>
        <OptionLink to='/notification'>
          <Option>
            <Notification />
            <Header3>알림</Header3>
          </Option>
        </OptionLink>
        <OptionLink to='/mypage'>
          <Option>
            <Person />
            <Header3>내 정보</Header3>
          </Option>
        </OptionLink>
        <OptionLink to='/settings'>
          <Option>
            <Settings />
            <Header3>설정</Header3>
          </Option>
        </OptionLink>
        <OptionLink to='/login'>
          <Option>
            <Logout />
            <Header3>로그아웃</Header3>
          </Option>
        </OptionLink>
      </OptionContainer>
    </SideBarContainer>
  );
}

const SideBarContainer = styled(Col)`
  height: 100vh;
  flex-basis: 34rem;
  padding: 3rem 5rem;
  gap: 8rem;
  border-right: 0.1rem solid var(--gray-1000);
`;

const OptionContainer = styled(Col)`
  gap: 3rem;
`;

const OptionLink = styled(Link)`
  text-decoration: none;
`;

const Option = styled(Row)`
  gap: 2.1rem;
`;
