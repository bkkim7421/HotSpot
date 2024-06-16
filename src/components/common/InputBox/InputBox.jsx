import { styled } from 'styled-components';

export const InputBox = styled.input`
  background-color: ${(props) => props.bgcolor && `${props.bgcolor}`};
  border: 0;
  outline: none;
  font-size: ${(props) => props.fontsize && `${props.fontsize}`};
  &::placeholder {
    color: var(--gray-400);
    font-size: ${(props) => props.fontsize && `${props.fontsize}`};
    font-family: 'SUIT', sans-serif;
  }
`;
