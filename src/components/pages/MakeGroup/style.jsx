import { styled } from 'styled-components';
import { Col, Row, Btn } from '../../atomic';
import { InputBox } from '../../common/InputBox';
import { Link } from 'react-router-dom';

export const MakeGroupContainer = styled(Col)`
  height: 100vh;
  overflow-y: auto;
  flex-grow: 1;
  max-width: 157.9rem;
  padding: 10rem 30rem 20rem;
  margin: auto;
  gap: 10rem;
`;

export const TextInput = styled(InputBox).attrs({
  bgcolor: 'transparent',
  fontsize: '2.4rem',
  placeholdersize: '2rem',
})`
  border-bottom: 0.1rem var(--gray-1000) solid;
  padding: 1rem 2rem;
`;

export const IntroduceInput = styled.span.attrs({ contentEditable: true })`
  font-size: 2.4rem;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px var(--gray-1000) solid;
  resize: none;
  min-height: 20rem;
`;

export const PeopleNumInput = styled(Row)`
  gap: 20rem;
  justify-content: center;
  & input {
    border: none;
    outline: none;
    border-bottom: 1px var(--gray-1000) solid;
    font-size: 3.2rem;
    width: 10rem;
    text-align: right;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

export const BtnContainer = styled(Row)`
  gap: 3rem;
  justify-content: center;
  padding: 1rem;

  & > a {
    text-decoration: none;
    &:first-child > div {
      color: var(--gray-1000);
      &:hover {
        background-color: var(--gray-100);
      }
    }
    &:last-child > div {
      color: var(--gray-000);
      &:hover {
        background-color: var(--brand-400);
      }
    }
  }
`;
