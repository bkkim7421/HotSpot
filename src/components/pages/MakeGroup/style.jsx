import { styled } from 'styled-components';
import { Col, Row } from '../../atomic';
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
