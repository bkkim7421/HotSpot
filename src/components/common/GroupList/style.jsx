import { styled } from 'styled-components';
import { Col } from '../../atomic';

export const GroupItemContainer = styled(Col)`
  height: 23rem;
  background-color: var(--gray-100);
  border-radius: 1rem;
  padding: 3rem;
  gap: 2rem;
  width: calc((100% - 4rem) / 3);
  & div:first-child {
    gap: 1rem;
    & div {
      gap: 0.6rem;
    }
  }
  & div:last-child {
    flex-grow: 1;
  }
`;

export const GroupListContainer = styled(Col)`
  gap: 2rem;
  & div {
    gap: 2rem;
  }
`;
