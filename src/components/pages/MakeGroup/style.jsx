import { styled } from 'styled-components';
import { Col, Wrap } from '../../atomic';
import { InputBox } from '../../common/InputBox';

export const MakeGroupContainer = styled(Col)`
  height: 100vh;
  overflow-y: auto;
  flex-grow: 1;
  max-width: 157.9rem;
  padding: 10rem 30rem 20rem;
  margin: auto;
  gap: 10rem;
`;

export const GroupNameInput = styled(InputBox).attrs({ bgcolor: 'transparent', fontsize: '2.4rem' })`
  border-bottom: 0.1rem var(--gray-1000) solid;
`;
