import { styled } from 'styled-components';
import { Row, Btn } from '../../atomic';
import { InputBox } from '../../common/InputBox';

export const SignInContainer = styled(Row)`
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding-bottom: 20rem;
  & > div {
    gap: 7rem;
    padding: 6rem 10rem;
    border-radius: 2rem;
    align-items: center;
    background-color: var(--gray-100);
  }
`;

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  & > div:first-child {
    gap: 1rem;
    padding: 0 1rem;
    width: 100%;
  }
  & > ${Btn} {
    padding: 2rem 0;
    &:hover {
      background-color: var(--brand-400);
    }
  }
  & a {
    text-decoration: none;
    color: var(--brand-500);
    transition: color 0.4s;
    &:hover {
      color: var(--brand-400);
    }
  }
`;

export const UserInfoInput = styled(InputBox).attrs({ bgcolor: 'var(--gray-200)', fontsize: '2.4rem' })`
  padding: 1.5rem 3rem;
  border-radius: 0.5rem;
  &:last-child {
    -webkit-text-security: disc;
  }
`;
