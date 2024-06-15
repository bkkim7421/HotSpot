import { styled } from 'styled-components';
import { Col } from '../../atomic';

export const ProfileBackground = styled.div`
  width: 100%;
  height: 41.6rem;
  background-image: url(${(props) => props.url});
  background-size: cover;
`;

export const MyPageContainer = styled(Col)`
  flex-grow: 1;
  padding-bottom: 20rem;
`;

export const ProfileContainer = styled(Col)`
  padding: 0 30rem;
  margin-top: -10rem;
  gap: 15rem;
  & > div:first-child {
    gap: 5rem;
    & > div:first-child {
      gap: 4rem;
    }
    & > div:last-child {
      gap: 2rem;
      height: 29.8rem;
    }
  }
  & > div {
    gap: 2rem;
  }
`;

export const ProfileImg = styled.div`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-size: cover;
`;

export const InfoItemContainer = styled(Col)`
  flex-grow: 1;
  gap: 1rem;
  padding: 3rem;
  align-items: stretch;
  background-color: var(--gray-100);
  border-radius: 1rem;
  & > div:last-child {
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`;
